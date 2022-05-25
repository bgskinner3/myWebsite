/* eslint-disable no-unused-vars */
const { Post } = require('../db/models/Post');
const { User } = require('../db/models/User');
const { Comment } = require('../db/models/Comment');
const { Message } = require('../db/models/Message');
const { Referance } = require('../db/models/Reference');
const { Reactos } = require('../db/models/Reactos');
const { ToDos } = require('../db/models/ToDos');
const { Cards } = require('../db/models/Cards');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const { GraphQLUpload } = require('graphql-upload');
const { GraphQLScalarType, Kind } = require('graphql');

//using this to generate a random string to replace the text of the file.
// this is purely for myself if and when i upload images, any sensitive content
//labelng the image will be replaced with a random string.
// the same logic here will be implemented when uploading videos etc.
const generateRandomString = (length) => {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      const users = await User.findAll();
      return users;
    },
    user: async (parent, args, context) => {
      const { id } = jwt.verify(args.token, process.env.REACT_APP_JWT_SECRET);

      const user = await User.findByPk(id);
      return user;
    },
    posts: async (parent, args, context) => {
      // if (!context.user) throw new Error('Not authorized')
      const posts = await Post.findAll();
      return posts;
    },
    post: async (parent, args) => {
      const id = args.id;
      const post = await Post.findByPk(id);
      return post;
    },
    comments: async (parent, args, context) => {
      const comments = await Comment.findAll();
      return comments;
    },
    comment: async (parent, args) => {
      const id = args.id;
      const comment = await Comment.findByPk(id);
      return comment;
    },
    messages: async (parent, args) => {
      const messages = await Message.findAll();
      return messages;
    },
    message: async (parent, args) => {
      const id = args.id;
      const message = await Message.findByPk(id);
      return message;
    },
    reactos: async (parent, args) => {
      const reactos = await Reactos.findAll();
      return reactos;
    },
    reacto: async (parent, args) => {
      const id = args.id;
      const reacto = await Reactos.findByPk(id);
      return reacto;
    },
    todos: async (parent, args) => {
      const allToDos = await ToDos.findAll();

      return allToDos;
    },
    todo: async (parent, args) => {
      const id = args.id;
      const todo = await ToDos.findByPk(id);
      return todo;
    },
    cards: async (parent, args) => {
      const allCards = await Cards.findAll();
      return allCards;
    },
    card: async (parent, args) => {
      const id = args.id;
      const card = Cards.findByPk(id);
      return card;
    },
  },
  Upload: GraphQLUpload,
  Date: dateScalar,
  Mutation: {
    createPost: async (parent, args, context) => {
      try {
        const existingPost = await Post.findOne({
          where: {
            title: args.input.title,
          },
        });
        if (existingPost) {
          throw new Error('That title already been made');
        }
        const post = await Post.create({ ...args.input });
        return post;
      } catch (error) {
        console.error(error);
      }
    },
    deletePost: async (parent, args) => {
      const id = args.id;
      const post = await Post.findByPk(id);
      await post.destroy();
    },
    updatePost: async (parent, args) => {
      const { id, content, title, image, subject } = args.input;

      const post = await Post.findByPk(id);

      post.set({
        title: title || post.title,
        content: content || post.content,
        image: image || post.image,
        subject: subject || post.subject,
      });
      await post.save();
      return post;
    },
    updateMessage: async (parent, args) => {
      const { id, read } = args.input;
      const message = await Message.findByPk(id);

      message.set({
        content: message.content,
        email: message.email,
        read: read,
      });
      await message.save();
      return message;
    },
    login: async (parent, args, context) => {
      try {
        const user = await User.findOne({ where: { username: args.username } });

        if (!user) {
          throw new Error('User does not exist!');
        }

        const isValid = await bcrypt.compare(args.password, user.password);
        if (!isValid) {
          throw new Error('Incorrect password');
        }

        const token = jwt.sign(
          { id: user.id, username: user.username },
          process.env.REACT_APP_JWT_SECRET,
          {
            expiresIn: '6h',
          }
        );

        return {
          token,
          user,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    uploadFile: async (parent, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;

      const { ext } = path.parse(filename);
      const randomName = generateRandomString(12) + ext;
      const stream = createReadStream();
      const pathName = path.join(
        __dirname,
        `../../../public/blogimages/${randomName}`
      );
      //   ../../../build/blogimages
      await stream.pipe(fs.createWriteStream(pathName));

      return {
        url: `http://localhost:4000/blogimages/${randomName}`,
      };
      //https://brennanskinner.herokuapp.com/blogimages/${randomName}
    },
    createMessage: async (parent, args, context) => {
      try {
        const message = await Message.create({ ...args.input });
        return message;
      } catch (error) {
        console.error('error occured in resolvers createMessage', error);
      }
    },
    createComment: async (parent, args, context) => {
      try {
        const comment = await Comment.create({ ...args.input });
        return comment;
      } catch (error) {
        console.error('error occured in creating a comment', error);
      }
    },
    createReacto: async (parent, args) => {
      try {
        const reacto = await Reactos.create({ ...args.input });
        return reacto;
      } catch (error) {
        console.error('in resolvers', error);
      }
    },
    updateReacto: async (parent, args) => {
      try {
        const { id, question, markdownnumber, completed, answer, title } =
          args.input;
        const reacto = await Reactos.findByPk(id);

        reacto.set({
          question: question || reacto.question,
          markdownnumber: markdownnumber || reacto.markdownnumber,
          completed: completed || reacto.completed,
          answer: answer || reacto.answer,
          title: title || reacto.title,
        });
        await reacto.save();
        return reacto;
      } catch (error) {
        console.error('in resolvers', error);
      }
    },
    createToDo: async (parent, args) => {
      try {
        const todo = await ToDos.create({ ...args.input });
        return todo;
      } catch (error) {
        console.error('in resolvers', error);
      }
    },
    updateToDo: async (parent, args) => {
      try {
        const { id, completed, content, importance } = args.input;
        const singleToDo = await ToDos.findByPk(id);

        singleToDo.set({
          completed: completed || singleToDo.completed,
          content: content || singleToDo.content,
          importance: importance || singleToDo.importance,
        });
        await singleToDo.save();
        return singleToDo;
      } catch (error) {
        console.error('in resolvers', error);
      }
    },
    deleteToDo: async (parent, args) => {
      const id = args.id;
      const todo = await ToDos.findByPk(id);
      await todo.destroy();
    },
    createCard: async (parent, args) => {
      try {
        const newCards = await Cards.create({ ...args.input });
        return newCards;
      } catch (error) {
        console.error('did not create in server', error);
      }
    },
    updateCard: async (parent, args) => {
      try {
        const { id, title, description, field } = args.input;
        const card = await Cards.findByPk(id)

        card.set({
          title: title || card.title,
          description: description || card.description,
          field: field || card.field
        })

        await card.save()
        return card
      } catch (error) {
        console.error('did not update in server', error);
      }
    }
  },
};

module.exports = { resolvers };

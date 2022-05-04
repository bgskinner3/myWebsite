/* eslint-disable no-unused-vars */
const { Post } = require('../db/models/Post');
const { User } = require('../db/models/User');
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
    console.log(value);
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    console.log(ast);
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
      console.log(id);
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
        subject: subject || post.subject

      });
      await post.save();
      return post;
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
            expiresIn: '1h',
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
      console.log('getting', file);
      const { createReadStream, filename, mimetype, encoding } = await file;

      const { ext } = path.parse(filename);
      const randomName = generateRandomString(12) + ext;
      const stream = createReadStream();
      const pathName = path.join(
        __dirname,
        `../../client/public/blogimages/${randomName}`
      );
      await stream.pipe(fs.createWriteStream(pathName));

      return {
        url: `http://localhost:4000/blogimages/${randomName}`,
      };
    },
  },
};

module.exports = { resolvers };

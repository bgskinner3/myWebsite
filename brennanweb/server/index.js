const { ApolloServer } = require('apollo-server-express');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./type-Defs');
const { db, User } = require('./db');
const express = require('express');
const jwt = require('jsonwebtoken');
const { graphqlUploadExpress } = require('graphql-upload');
const port = process.env.PORT || 4000;
const cors = require('cors');
const path = require('path')


require('dotenv').config();


const getUser = async (token) => {
  try {
    if (token) {
      const { id } = jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
      console.log(id)
      const user = await User.findOne({
        where: {
          id: id
        }
      });
      return user;
    }
    return null;
  } catch (error) {
    console.error('ERRRRRRRR', error);
    return null;
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    
    const token = req.get('Authorization') || '';

    
    if (token && token.length) {
      const user = await getUser(token.replace('Bearer ', ''));
      
      return { user };
    } else {
      return {};
    }
  },
});


const app = express();
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  const { status } = err;
  res.status(status).json(err);
};


const startServer = async () => {
  await db.sync();
  await server.start();
  app.use(graphqlUploadExpress());
  app.use(cors());
  app.use(errorHandler);
  

  server.applyMiddleware({ app });
  app.use(express.static('public'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:4000`);
  });
};

startServer();

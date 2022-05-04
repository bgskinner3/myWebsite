const { ApolloServer } = require('apollo-server-express');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./type-Defs');
const { db, User } = require('./db');
const express = require('express');
const jwt = require('jsonwebtoken');
const { graphqlUploadExpress } = require('graphql-upload');
const port = process.env.PORT || 4000;
const cors = require('cors');
require('dotenv').config();

const getUser = async (token) => {
  try {
    if (token) {
      const { id } = jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
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
console.log('port', port)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    
    const token = req.get('Authorization') || '';

    
    if (token && token.length) {
      const user = await getUser(token.replace('Bearer ', ''));
      console.log(user);
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
console.log('error handler server', errorHandler);
app.use(errorHandler);

const startServer = async () => {
  await db.sync();
  await server.start();
  app.use(graphqlUploadExpress());
  app.use(cors());

  server.applyMiddleware({ app });
  app.use(express.static('../../../public'));
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:4000`);
  });
};

startServer();

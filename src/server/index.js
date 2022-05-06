const { ApolloServer } = require('apollo-server-express');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./type-defs');
const { db } = require('./db');
const express = require('express');
const { graphqlUploadExpress } = require('graphql-upload');
const cors = require('cors');
const getUser = require('./db/controllers/getUser')
const http = require('http')
const https = require('https')
const path = require('path')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');

require('dotenv').config();




const startServer = async () => {
  await db.sync();
  const app = express();
 
  let httpServer;

  if (process.env.NODE_ENV === 'production') {
    httpServer = https.createServer(app);
  
  }

  if (process.env.NODE_ENV !== 'production') {
   httpServer = http.createServer(app);
  
  }
  
  
console.log('process', process.env.PORT)

  
 
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
    cors: {
      origin: ["http://localhost:4000", "https://brennanskinner.herokuapp.com"],
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
   
  });
  

  await server.start();
  
  app.use(graphqlUploadExpress());
  app.use( cors());
  
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });


  server.applyMiddleware({ app });
  
  // await new Promise((resolve) =>
  //   httpServer.listen({ port: config.port }, resolve)
  // );
  await new Promise((resolve) => httpServer.listen({ port: process.env.PORT || 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

};

startServer();

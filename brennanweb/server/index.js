const { ApolloServer } = require('apollo-server-express');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./type-Defs');
const { db } = require('./db');
const express = require('express');
const { graphqlUploadExpress } = require('graphql-upload');
const cors = require('cors');
const getUser = require('./db/controllers/getUser')
const http = require('http')
const https = require('https')
const path = require('path')
const fs = require('fs')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');

require('dotenv').config();




const startServer = async () => {
  await db.sync();
  const app = express();
  const configurations = {
    production: {
      ssl: true,
      port: 443,
      hostname: 'brennanskinner.herokuapp.com',
    },
    development: {
      ssl: false, port: 4000, hostname: 'localhost'
    }
  };
  const environment = process.env.NODE_ENV || 'development';
  const config = configurations[environment];
  // let httpServer;
  // if (process.env.NODE_ENV === 'production') {
  //   httpServer = https.createServer(app);
  // }

  // if (process.env.NODE_ENV !== 'production') {
  //  httpServer = http.createServer(app);
  // }
  let httpServer;
  if (config.ssl) {
    // Assumes certificates are in a .ssl folder off of the package root.
    // Make sure these files are secured.
    console.log(true, process.env.NODE_ENV);
    
      httpServer = https.createServer(
        {
          key: fs.readFileSync(`./ssl/${environment}/server.key`),
          cert: fs.readFileSync(`./ssl/${environment}/server.crt`),
        },

        app
      );
  } else {
    httpServer = http.createServer(app);
  }

  
 
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
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    csrfPrevention: true,
  });
  

  await server.start();
  
  app.use(graphqlUploadExpress());
  app.use( cors());
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });


  server.applyMiddleware({ app });
  
  await new Promise((resolve) =>
    httpServer.listen({ port: config.port }, resolve)
  );
  // await new Promise((resolve) => httpServer.listen({ port: process.env.PORT || 4000  }, resolve));
  // console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
 console.log(
   '🚀 Server ready at',
   `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${
     server.graphqlPath
   }`
 );
 return { server, app };
};

startServer();

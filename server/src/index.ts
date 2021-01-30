import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'graphql';
import { PlantResolver } from './resolvers/plant';

const main = async () => {
  // Express app
  const app = express();

  // Cors middleware
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PlantResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  // Server listening
  app.listen(4000, () => {
    console.log('Server started on http://localhost:4000');
  });
};

main().catch((error) => {
  console.error(error);
});

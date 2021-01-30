import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { PlantResolver } from './resolvers/plant';
import { TestResolver } from './resolvers/test';
import { Plant } from './entities/Plant';

const main = async () => {
  // Database connection
  await createConnection({
    type: 'postgres',
    database: 'gardeniox',
    username: 'faust',
    password: '4532164mine',
    logging: true,
    synchronize: true,
    entities: [Plant],
  });
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
      resolvers: [TestResolver, PlantResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  // Server listening
  app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
  });
};

main().catch((error) => {
  console.error(error);
});

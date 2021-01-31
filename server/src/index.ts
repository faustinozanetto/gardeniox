import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { PlantResolver } from './resolvers/plant';
import { PlotResolver } from './resolvers/plot';
import { Plant } from './entities/Plant';
import { Plot } from './entities/Plot';

const main = async () => {
  let connection = null;
  try {
    // Database connection
    connection = await createConnection({
      type: 'postgres',
      database: 'gardeniox',
      username: 'faust',
      password: '4532164mine',
      logging: true,
      synchronize: true,
      entities: [Plant, Plot],
    });
  } catch (error) {
    console.error(
      'An error occurred while trying to initialize connection to database!',
      error
    );
    process.exit();
  }
  console.log(
    'Successfully connected to database:',
    connection.options.database
  );

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
      resolvers: [PlantResolver, PlotResolver],
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
    console.log('🚀 Server started on http://localhost:5000');
  });
};

main().catch((error) => {
  console.error(error);
});

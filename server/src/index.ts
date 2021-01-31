import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { Connection, createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { PlantResolver } from './resolvers/plant';
import { PlotResolver } from './resolvers/plot';
import { PlantEntity } from './entities/plant.entity';
import { PlotEntity } from './entities/plot.entity';

let connection: Connection;

const main = async () => {
  try {
    // Database connection
    connection = await createConnection({
      type: 'postgres',
      database: 'gardeniox',
      username: 'faust',
      password: '4532164mine',
      logging: true,
      synchronize: true,
      entities: [PlantEntity, PlotEntity],
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
  app.listen(4000, () => {
    console.log('🚀 Server started on http://localhost:4000');
  });
};

export const getConnection = () => {
  return connection;
};

main().catch((error) => {
  console.error(error);
});

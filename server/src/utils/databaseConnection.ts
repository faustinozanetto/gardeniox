import { ConnectionOptions } from 'typeorm';
import { PlantEntity, PlotEntity, UserEntity } from '../entities/index';

export const databaseOptions: ConnectionOptions = {
  type: 'postgres',
  database: 'gardeniox',
  username: 'faust',
  password: '4532164mine',
  logging: true,
  synchronize: true,
  entities: [PlantEntity, PlotEntity, UserEntity],
};

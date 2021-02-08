import { ConnectionOptions } from 'typeorm';
import { PlantEntity } from '../entities/plant.entity';
import { PlotEntity } from '../entities/plot.entity';

export const databaseOptions: ConnectionOptions = {
  type: 'postgres',
  database: 'gardeniox',
  username: 'faust',
  password: '4532164mine',
  logging: true,
  synchronize: true,
  entities: [PlantEntity, PlotEntity],
};

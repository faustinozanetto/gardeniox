import { PlantEntity } from '../entities/plant.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(PlantEntity)
export class PlantRepository extends Repository<PlantEntity> {}

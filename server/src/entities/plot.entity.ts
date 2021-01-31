import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PlantEntity } from './plant.entity';

@ObjectType()
@Entity({ name: 'plots' })
export class PlotEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column({ nullable: true })
  size!: number;

  @Field()
  @Column({ nullable: true })
  maxPlants!: number;

  @Field()
  @OneToMany(() => PlantEntity, (plant) => plant.plot)
  plants: PlantEntity[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}

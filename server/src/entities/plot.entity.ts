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
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ nullable: true })
  size!: number;

  @Field()
  @Column({ nullable: true })
  maxPlants!: number;

  @OneToMany(() => PlantEntity, (plant: PlantEntity) => plant.plot, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  plants: Array<PlantEntity>;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}

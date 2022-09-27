import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Schema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  schema: string;
}

import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('solicitation')
export class Solicitation {
  @PrimaryGeneratedColumn()
  id: number;
}

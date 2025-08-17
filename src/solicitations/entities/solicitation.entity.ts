import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('solicitation')
export class Solicitation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column('text', { nullable: false })
  description: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'in_progress', 'completed', 'cancelled'],
    default: 'pending',
  })
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';

  @Column({ type: 'bigint', nullable: false })
  valor: number; // valor em centavos

  @Column({ nullable: true })
  chavePix: string;

  @ManyToOne(() => User, { eager: true, nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

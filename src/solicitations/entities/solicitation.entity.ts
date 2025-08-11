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

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'in_progress', 'completed', 'cancelled'],
    default: 'pending',
  })
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';

  @Column({ type: 'bigint' })
  valor: number; // valor em centavos

  @Column()
  chavePix: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' }) // nome da coluna FK no banco
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

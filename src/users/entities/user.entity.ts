// src/users/entities/user.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Solicitation } from 'src/solicitations/entities/solicitation.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: 'admin' | 'user' | 'moderator'; // você pode expandir se precisar

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  profilePhoto: string; // URL ou caminho da foto

  @Column({ nullable: true })
  city: string;

  @Column({ length: 2, nullable: true })
  uf: string; // Sigla do estado (ex: SP, RJ)

  @OneToMany(() => Solicitation, (solicitation) => solicitation.user)
  solicitations: Solicitation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

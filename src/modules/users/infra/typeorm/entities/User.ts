import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

import { Exclude, Type } from 'class-transformer';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn({ type: 'text' })
  @Type(() => Date)
  created_at: Date;

  @UpdateDateColumn({ type: 'text' })
  @Type(() => Date)
  updated_at: Date;
}

export default User;

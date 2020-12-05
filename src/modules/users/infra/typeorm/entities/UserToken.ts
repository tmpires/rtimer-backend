import { Type } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('user_tokens')
class UserToken {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  token: string;

  @Column()
  user_id: number;

  @CreateDateColumn({ type: 'text' })
  @Type(() => Date)
  created_at: Date;

  @UpdateDateColumn({ type: 'text' })
  @Type(() => Date)
  updated_at: Date;
}

export default UserToken;

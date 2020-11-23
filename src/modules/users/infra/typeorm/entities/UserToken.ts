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
  user_id: string;

  @CreateDateColumn({ type: 'text' })
  created_at: Date;

  @UpdateDateColumn({ type: 'text' })
  updated_at: Date;
}

export default UserToken;

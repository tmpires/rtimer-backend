import UserToken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokenRepository {
  generate(user_id: number): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined>;
}

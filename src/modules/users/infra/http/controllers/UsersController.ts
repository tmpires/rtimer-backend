import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import { classToClass } from 'class-transformer';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, password, old_password } = request.body;
    const { id } = request.user;

    const updateUser = container.resolve(UpdateProfileService);

    const user = await updateUser.execute({
      name,
      email,
      password,
      old_password,
      user_id: id,
    });

    return response.json(classToClass(user));
  }
}

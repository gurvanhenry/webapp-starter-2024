import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'gugu@example.com',
      password: 'supersecret',
    },
    {
      userId: 2,
      username: 'user',
      password: 'pass',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly UsersRepository: UsersRepository) {}

  async getUserByEmail(email) {
    return await this.UsersRepository.getUserByEmail(email);
  }
  async deleteUser(id) {
    const user = await this.getUser(id);
    if (!user)
      throw new HttpException('impossible action', HttpStatus.NOT_FOUND);
    return await this.UsersRepository.deleteUser(id);
  }
  async upUser(id, { name, email, password }) {
    const user = await this.getUser(id);
    if (!user)
      throw new HttpException('impossible to use user', HttpStatus.CONFLICT);
    const existEmail = await this.getUserByEmail(email);
    if (existEmail)
      throw new HttpException('impossible to use email', HttpStatus.CONFLICT);
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;
    return await this.UsersRepository.upUser(id, user);
  }
  async insertUser({ name, email, password }) {
    const existEmail = await this.getUserByEmail(email);
    if (existEmail)
      throw new HttpException('impossible to use email', HttpStatus.CONFLICT);
    return await this.UsersRepository.insertUser({ name, email, password });
  }
  async getUser(id) {
    const user = await this.getUser(id);
    if (!user)
      throw new HttpException('impossible action', HttpStatus.NOT_FOUND);
    return await this.UsersRepository.getUser(id);
  }
  async getAllUsers() {
    return await this.UsersRepository.getAllUsers();
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersRepository {
  async getUserByEmail(email) {
    return await this.prisma.user.findFirst({where: {email}});
  }
  constructor(private readonly prisma: PrismaService) {}

  async deleteUser(id) {
    return await this.prisma.user.delete({ where: { id } });
  }
  async upUser(id, { name, email, password }) {
    return await this.prisma.user.update({
      where: { id },
      data: { name, email, password },
    });
  }
  async insertUser({ name, email, password }) {
    return await this.prisma.user.create({ data: { name, email, password } });
  }
  async getUser(id) {
    return await this.prisma.user.findFirst({ where: { id } });
  }
  async getAllUsers() {
    return await this.prisma.user.findMany({});
  }
}

import { Injectable } from '@nestjs/common';
import { InsertUserDTO } from './dto/insertUser-dto';
import { User } from './entity/Users';

@Injectable()
export class UsersService {
  users: User[] = [];

  deleteUser() {
    return 'deleta absolutamente nada';
  }
  upUser(id) {
    const user = this.users.find((e)=>e.id === id);
    return user;
  }
  inserUser({ name, email, password }: InsertUserDTO) {
    const user = new User(name, email, password, this.users.length);
    return this.users.push(user);
  }
  getUsers() {
    return 'retorna o usuário';
  }
  getAllUsers() {
    return 'todos os usuários';
  }
}

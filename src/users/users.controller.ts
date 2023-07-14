import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/Users';
import { InsertUserDTO } from './dto/insertUser-dto';
import { UpUserDTO } from './dto/upUser-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('user')
  getUser() {
    return this.usersService.getUsers();
  }

  @Post()
  insertUser(@Body() body:InsertUserDTO) {
    return this.usersService.inserUser(body);
  }

  @Put()
  upUser(@Param(':id', ParseIntPipe) id: number, body: UpUserDTO) {
    return this.usersService.upUser(id);
  }

  @Delete()
  deleteUser() {
    return this.usersService.deleteUser();
  }
}

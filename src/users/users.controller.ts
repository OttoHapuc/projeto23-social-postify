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
  getUser(@Param(':id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }

  @Post()
  insertUser(@Body() { name, email, password }:InsertUserDTO) {
    return this.usersService.insertUser({ name, email, password });
  }

  @Put()
  upUser(@Param(':id', ParseIntPipe) id: number, { name, email, password }: UpUserDTO) {
    return this.usersService.upUser(id, { name, email, password });
  }

  @Delete()
  deleteUser(@Param(':id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}

import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Delete()
  deletePost() {
    return this.postsService.deletePost();
  }
  @Put()
  upPost() {
    return this.postsService.upPost();
  }
  @Post()
  insertPost() {
    return this.postsService.insertPost();
  }
  @Get('post')
  getPost() {
    return this.postsService.getPost();
  }
  @Get()
  getAllPost() {
    return this.postsService.getAllPost();
  }
}

import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostEntity } from './db/post.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/h')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/add')
  addPost(@Body() post: PostEntity) {
    return this.appService.addPost(post);
  }

  @Get('/posts')
  getPosts() {
    return this.appService.getPosts();
  }
}

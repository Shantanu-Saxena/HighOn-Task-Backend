import { Injectable } from '@nestjs/common';
import { PostEntity } from './db/post.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async addPost(post) {
    console.log(post);
    const newPost = new PostEntity();
    newPost.image = post.image;
    newPost.description = post.description;
    newPost.location = post.location;
    newPost.tags = post.tags;

    await newPost.save();
    return newPost.toJSON();
  }
  async getPosts(): Promise<Array<any>> {
    const data = await PostEntity.find({ where: {} });
    return data;
  }
}

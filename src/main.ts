import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3001);

  app.enableCors({
    credentials: true,
  });
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
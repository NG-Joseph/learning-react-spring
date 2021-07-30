import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, new FastifyAdapter(), {cors:{
      origin: '*',
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: true, 
      optionsSuccessStatus: 204,
      
      
    }}
    
    
  );
  await app.listen(3001);
  console.log(`Server is listening on ${await app.getUrl()}`);
}
bootstrap();

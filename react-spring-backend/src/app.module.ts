import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './app.database.module';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductsModule, DatabaseModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

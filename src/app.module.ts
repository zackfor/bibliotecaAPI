import { Module } from '@nestjs/common';
import { LivrosModule } from './livros/livros.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/biblioteca'),
    LivrosModule,
  ],
})
export class AppModule {}

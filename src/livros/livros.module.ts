import { Module } from '@nestjs/common';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Livro, SchemaLivro } from './livro.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: Livro.name, schema: SchemaLivro}])],
  controllers: [LivrosController],
  providers: [LivrosService]
})
export class LivrosModule {}

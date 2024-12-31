import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Livro, SchemaLivro } from './livro.schema';
import { CriarLivroDto } from './dto/livro.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';


@Injectable()
export class LivrosService {
    constructor(@InjectModel(Livro.name) private livroModel: Model<Livro>) {}

    async addBook(criarLivroDto: CriarLivroDto): Promise<Livro> {
        const newLivro = new this.livroModel(criarLivroDto);
        return newLivro.save();
    }

    async listarLivros(): Promise<Livro[]> {
        return this.livroModel.find().exec();
    }

    async buscarLivro(id: string): Promise<Livro> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new HttpException('Invalid ID format', HttpStatus.BAD_REQUEST);
          }
        const livro = await this.livroModel.findById(id).exec();
        if (!livro) {
            throw new HttpException('Livro not found', HttpStatus.NOT_FOUND);
          }
        return livro;
    }

    async deletarLivro(id: string): Promise<void> {
        await this.livroModel.findByIdAndDelete(id).exec();
    }
}

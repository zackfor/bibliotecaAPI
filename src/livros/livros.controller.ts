import { Controller, Delete, Get, Post, Body, Param } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CriarLivroDto } from './dto/livro.dto';
import { Livro } from './livro.schema';


@Controller('livros')
export class LivrosController {
    constructor(private livrosService: LivrosService) {}

    @Post('addBook')
    addBook(@Body() criarLivroDto: CriarLivroDto): Promise<Livro> {
        return this.livrosService.addBook(criarLivroDto);
    }

    @Get('listarLivros')
    listarLivros() {
        return this.livrosService.listarLivros();
    }
    
    @Get(":id")
    buscarLivro(@Param("id") id: string) {
        return this.livrosService.buscarLivro(id);
    }

    @Delete(":id")
    deleteBook(@Param("id") id: string) {
        return this.livrosService.deletarLivro(id);
    }

}

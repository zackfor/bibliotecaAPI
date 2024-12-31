import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class CriarLivroDto {

    @IsString()
    @ApiProperty({description: "Titulo do livro", example: "Senhor dos Aneis"})
    title: 'Titulo';

    @IsString()
    @ApiProperty({description: "Autor do livro", example: "J.R.R. Tolkien"})
    author: 'Autor';

    @IsString()
    @IsOptional()
    @ApiProperty({description: "Descricao do livro", example: "Descricao"})
    description?: 'Descricao';
}
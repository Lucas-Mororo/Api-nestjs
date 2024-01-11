import { IsString, IsNumber, IsArray, IsDateString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CaracteristicaDto {
  @IsString({ message: 'O campo nome da característica deve ser uma string' })
  nome: string;

  @IsString({ message: 'O campo descrição da característica deve ser uma string' })
  descricao: string;
}

class ImagemDto {
  @IsString({ message: 'O campo URL da imagem deve ser uma string' })
  url: string;

  @IsString({ message: 'O campo descrição da imagem deve ser uma string' })
  descricao: string;
}

export class CreateProdutoDto {
  @IsString({ message: 'O campo nome deve ser uma string' })
  nome: string;

  @IsNumber({}, { message: 'O campo valor deve ser um número' })
  valor: number;

  @IsNumber({}, { message: 'O campo quantidadeDisponivel deve ser um número' })
  quantidadeDisponivel: number;

  @IsString({ message: 'O campo descrição deve ser uma string' })
  descricao: string;

  @IsArray({ message: 'O campo caracteristicas deve ser um array' })
  @ValidateNested({ each: true, message: 'Cada característica deve ser um objeto válido' })
  @Type(() => CaracteristicaDto)
  caracteristicas: CaracteristicaDto[];

  @IsArray({ message: 'O campo imagens deve ser um array' })
  @ValidateNested({ each: true, message: 'Cada imagem deve ser um objeto válido' })
  @Type(() => ImagemDto)
  imagens: ImagemDto[];

  @IsString({ message: 'O campo categoria deve ser uma string' })
  categoria: string;

  @IsDateString({ message: 'O campo dataCriacao deve ser uma data válida' })
  dataCriacao: string;

  @IsDateString({ message: 'O campo dataAtualizacao deve ser uma data válida' })
  dataAtualizacao: string;
}

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString({ message: 'O nome deve ser uma string.' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  @MaxLength(255, { message: 'O nome não pode ter mais de 255 caracteres.' })
  nome: string;

  @IsEmail({}, { message: 'O e-mail fornecido é inválido.' })
  @IsNotEmpty({ message: 'O e-mail não pode estar vazio.' })
  @MaxLength(255, { message: 'O e-mail não pode ter mais de 255 caracteres.' })
  email: string;

  @IsString({ message: 'A senha deve ser uma string.' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  @MaxLength(30, { message: 'A senha não pode ter mais de 30 caracteres.' })
  senha: string;
}

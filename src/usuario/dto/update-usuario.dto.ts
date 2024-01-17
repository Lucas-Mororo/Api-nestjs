import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsEmail, IsString, MinLength, MaxLength, IsOptional } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsString({ message: 'O nome deve ser uma string.' })
    @MaxLength(255, { message: 'O nome não pode ter mais de 255 caracteres.' })
    @IsOptional()
    nome: string;

    @IsEmail({}, { message: 'O e-mail fornecido é inválido.' })
    @MaxLength(255, { message: 'O e-mail não pode ter mais de 255 caracteres.' })
    @IsOptional()
    email: string;

    @IsString({ message: 'A senha deve ser uma string.' })
    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
    @MaxLength(30, { message: 'A senha não pode ter mais de 30 caracteres.' })
    @IsOptional()
    senha: string;
}

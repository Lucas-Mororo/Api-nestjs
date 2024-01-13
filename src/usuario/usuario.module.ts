import { Module } from '@nestjs/common';
import { UsuariosController } from './usuario.controller';
import { UsuariosRepository } from './usuario.service';
import { EmailEhUnicoValidator } from './validacao/email-eh-unico.validator';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [UsuariosRepository, EmailEhUnicoValidator],
})
export class UsuarioModule {}

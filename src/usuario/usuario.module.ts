import { Module } from '@nestjs/common';
import { UsuariosController } from './usuario.controller';
import { UsuariosRepository } from './usuario.service';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [UsuariosRepository],
})
export class UsuarioModule {}

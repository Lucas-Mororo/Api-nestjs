import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosRepository } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('/usuarios')
export class UsuariosController {
  constructor(private usuarioRepository: UsuariosRepository) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CreateUsuarioDto) {
    this.usuarioRepository.create(dadosUsuario);
    return dadosUsuario;
  }

  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.findAll();
  }
}

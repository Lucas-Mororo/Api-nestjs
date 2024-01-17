import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { UsuariosRepository } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('/usuarios')
export class UsuariosController {
  constructor(private usuarioRepository: UsuariosRepository) { }

  @Post()
  async criaUsuario(@Body() dadosUsuario: CreateUsuarioDto) {
    const usuarioEntiy = new UsuarioEntity();
    usuarioEntiy.id = uuid();
    usuarioEntiy.nome = dadosUsuario.nome;
    usuarioEntiy.email = dadosUsuario.email;
    usuarioEntiy.senha = dadosUsuario.senha;


    this.usuarioRepository.create(usuarioEntiy);
    return { usuario: new ListaUsuarioDTO(usuarioEntiy.id, usuarioEntiy.nome), massage: "Usuário criado com sucesso!" };
  }

  @Get()
  async listaUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.findAll();
    const usuariosLista = usuariosSalvos.map(usuario => new ListaUsuarioDTO(usuario.id, usuario.nome));

    return usuariosLista;
  }

  @Put("/:id")
  async atualizaUsuario(@Param("id") id: string, @Body() novosDados: UpdateUsuarioDto) {
    const usuarioAtualizado = await this.usuarioRepository.update(id, novosDados);

    return {
      usuario: usuarioAtualizado,
      message: "Usuário atualizado com sucesso!",
    }
  }

  @Delete("/:id")
  async deleterUsuario(@Param("id") id: string) {
    const usuarioAtualizado = await this.usuarioRepository.delete(id);

    return {
      usuario: usuarioAtualizado,
      message: "Usuário deletado com sucesso!",
    }
  }
}

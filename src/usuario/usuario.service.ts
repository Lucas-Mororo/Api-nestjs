import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuariosRepository {
  private usuarios: UsuarioEntity[] = [];
  private buscaPorId(id: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.id === id,
    );

    if (!possivelUsuario)
      throw new Error("Usuário não existe!");

    return possivelUsuario;
  }

  async create(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
  }

  async findAll() {
    return this.usuarios;
  }

  async update(id: string, dadosDeAtualizadao: Partial<UsuarioEntity>) {
    const usuario = this.buscaPorId(id)

    Object.entries(dadosDeAtualizadao).forEach(([chave, valor]) => {
      if (chave === "id")
        return;

      usuario[chave] = valor;
    })

    return usuario;
  }

  async delete(id: string) {
    const usuario = this.buscaPorId(id)
    this.usuarios = this.usuarios.filter(usuarioSalvo => usuarioSalvo.id !== id)

    return usuario
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }
}

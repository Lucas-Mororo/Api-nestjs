import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosRepository {
  private usuarios = [];

  async create(usuario) {
    this.usuarios.push(usuario);
  }

  async findAll() {
    return this.usuarios;
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }
}

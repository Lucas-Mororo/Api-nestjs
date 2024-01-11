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
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoService {
  private produto = [];

  create(produto) {
    this.produto.push(produto);
  }

  findAll() {
    return this.produto;
  }
}

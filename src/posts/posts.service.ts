import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {

  deletePost() {
    return 'deletei nada'
  }
  upPost() {
    return 'atualizei nada'
  }
  insertPost() {
    return 'inseri nada'
  }
  getPost() {
    return 'não tem um, tu quer o que?'
  }
  getAllPost() {
    return 'papo frio aqui em'
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class TableService {
  findAll() {
    return 'Buscar todas as mesas';
  }

  create() {
    return 'Criar uma mesa';
  }
}

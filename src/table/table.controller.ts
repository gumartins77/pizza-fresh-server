import { Controller, Get, Post } from '@nestjs/common';

@Controller('table')
export class TableController {
  @Get()
  findAll() {
    return 'Buscar todas as mesas';
  }

  @Post()
  create() {
    return 'Criar uma mesa';
  }
}

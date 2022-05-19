import { Controller, Get } from '@nestjs/common';

@Controller('table')
export class TableController {
  @Get()
  findAll() {
    return 'Buscar todas as mesas';
  }
}

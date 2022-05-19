import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Get()
  findAll() {
    return this.tableService.findAll();
  }

  @Post()
  create(@Body() createTableDto: CreateTableDto) {
    return this.tableService.create(createTableDto);
  }
}

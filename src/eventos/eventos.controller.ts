import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventosService } from './eventos.service';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}


  @Get()
  findAll() {
    return this.eventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventosService.findOne(+id);
  }

 
}

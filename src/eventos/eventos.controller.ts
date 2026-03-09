import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEventoDto } from './dto/create-evento.dto';
import { PaginationEventoDto } from './dto/pagination-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { EventosService } from './eventos.service';

@ApiTags('Evento')
@Controller('Evento')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'OK', isArray: true })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  findAll() {
    return this.eventosService.findAll();
  }

  @Get('GetEventosCombobox')
  @ApiResponse({ status: 200, description: 'OK', isArray: true })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  findCombobox() {
    return this.eventosService.findCombobox();
  }

  @Get('GetEventosPaginacion')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  findPaginacion(@Query() paginationDto: PaginationEventoDto) {
    return this.eventosService.findPaginacion(paginationDto);
  }

  @Get('GetEventosFilter')
  @ApiResponse({ status: 200, description: 'OK', isArray: true })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiQuery({ name: 'filtro', description: 'Texto de búsqueda' })
  findFilter(@Query('filtro') filtro: string) {
    return this.eventosService.findFilter(filtro);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.eventosService.findOne(id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createEventoDto: CreateEventoDto) {
    return this.eventosService.create(createEventoDto);
  }

  @Put()
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  update(@Body() updateEventoDto: UpdateEventoDto) {
    return this.eventosService.update(updateEventoDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.eventosService.remove(id);
  }
}

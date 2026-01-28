import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { MediosPagosService } from './medios-pagos.service';
import { CreateMedioPagoDto } from './dto/create-medio-pago.dto';
import { UpdateMedioPagoDto } from './dto/update-medio-pago.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('medios-pagos')
export class MediosPagosController {
  constructor(private readonly mediosPagosService: MediosPagosService) {}

  @Post()
  @ApiResponse({status: 201, description: 'Created'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  create(@Body() createMediosPagoDto: CreateMedioPagoDto) {
    return this.mediosPagosService.create(createMediosPagoDto);
  }

  @Get()
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  findAll() {
    return this.mediosPagosService.findAll();
  }

  @Get(':idMedioPago')
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  findOne(@Param('idMedioPago', ParseIntPipe) id: number) {
    return this.mediosPagosService.findOne(id);
  }

  @Put(':idMedioPago')
  update(@Param('idMedioPago', ParseIntPipe) id: number, @Body() updateMediosPagoDto: UpdateMedioPagoDto) {
    return this.mediosPagosService.update(id, updateMediosPagoDto);
  }

  @Delete(':idMedioPago')
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  remove(@Param('idMedioPago', ParseIntPipe) id: number) {
    return this.mediosPagosService.remove(id);
  }
}

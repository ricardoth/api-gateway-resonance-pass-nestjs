import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('lugares')
export class LugaresController {
  constructor(private readonly lugaresService: LugaresService) {}

  @Post()
  @ApiResponse({status: 201, description: 'Created'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  create(@Body() createLugareDto: CreateLugarDto) {
    return this.lugaresService.create(createLugareDto);
  }

  @Get()
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  findAll() {
    return this.lugaresService.findAll();
  }

  @Get(':idLugar')
  findOne(@Param('idLugar', ParseIntPipe) id: number) {
    return this.lugaresService.findOne(id);
  }

  @Put(':idLugar')
  update(@Param('idLugar', ParseIntPipe) id: number, @Body() updateLugarDto: UpdateLugarDto) {
    console.log('Llego')
    return this.lugaresService.update(id, updateLugarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lugaresService.remove(+id);
  }
}

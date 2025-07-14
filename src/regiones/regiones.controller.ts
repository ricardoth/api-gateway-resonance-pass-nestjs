import { Controller, Get } from '@nestjs/common';
import { RegionesService } from './regiones.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('regiones')
export class RegionesController {
  constructor(private readonly regionesService: RegionesService) {}


  @Get()
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  findAll() {
    return this.regionesService.findAll();
  }
  
}

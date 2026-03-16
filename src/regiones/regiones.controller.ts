import { Controller, Get, UseGuards } from '@nestjs/common';
import { RegionesService } from './regiones.service';
import { ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
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

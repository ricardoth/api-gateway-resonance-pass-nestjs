import { Controller, Get, UseGuards } from '@nestjs/common';
import { TiposUsuarioService } from './tipos-usuario.service';
import { ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tipos-usuario')
export class TiposUsuarioController {
  constructor(private readonly tiposUsuarioService: TiposUsuarioService) {}

  @Get()
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  findAll() {
    return this.tiposUsuarioService.findAll();
  }
  
}

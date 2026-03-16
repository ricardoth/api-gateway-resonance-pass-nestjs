import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ComunasService } from './comunas.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('comunas')
export class ComunasController {
  constructor(private readonly comunasService: ComunasService) {}

  @Get(':idRegion')
  findAllByRegion(@Param('idRegion') idRegion: number) {
    return this.comunasService.findAllByRegion(idRegion);
  }
}

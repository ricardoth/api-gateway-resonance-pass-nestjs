import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ComunasService } from './comunas.service';
@Controller('comunas')
export class ComunasController {
  constructor(private readonly comunasService: ComunasService) {}

  @Get(':idRegion')
  findAllByRegion(@Param('idRegion') idRegion: number) {
    return this.comunasService.findAllByRegion(idRegion);
  }
}

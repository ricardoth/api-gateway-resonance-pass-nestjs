import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MediosPagosService } from './medios-pagos.service';
import { CreateMediosPagoDto } from './dto/create-medios-pago.dto';
import { UpdateMediosPagoDto } from './dto/update-medios-pago.dto';

@Controller('medios-pagos')
export class MediosPagosController {
  constructor(private readonly mediosPagosService: MediosPagosService) {}

  @Post()
  create(@Body() createMediosPagoDto: CreateMediosPagoDto) {
    return this.mediosPagosService.create(createMediosPagoDto);
  }

  @Get()
  findAll() {
    return this.mediosPagosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediosPagosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediosPagoDto: UpdateMediosPagoDto) {
    return this.mediosPagosService.update(+id, updateMediosPagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediosPagosService.remove(+id);
  }
}

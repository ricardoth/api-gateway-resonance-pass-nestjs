import { Module } from '@nestjs/common';
import { MediosPagosService } from './medios-pagos.service';
import { MediosPagosController } from './medios-pagos.controller';

@Module({
  controllers: [MediosPagosController],
  providers: [MediosPagosService],
})
export class MediosPagosModule {}

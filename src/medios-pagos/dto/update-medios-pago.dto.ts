import { PartialType } from '@nestjs/swagger';
import { CreateMediosPagoDto } from './create-medios-pago.dto';

export class UpdateMediosPagoDto extends PartialType(CreateMediosPagoDto) {}

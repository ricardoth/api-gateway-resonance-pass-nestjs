import { PartialType } from '@nestjs/swagger';
import { CreateMedioPagoDto } from './create-medio-pago.dto';

export class UpdateMedioPagoDto extends PartialType(CreateMedioPagoDto) {}

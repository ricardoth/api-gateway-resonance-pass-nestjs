import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';
import { CreateEventoDto } from './create-evento.dto';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {
  @ApiProperty({ description: 'ID del evento a actualizar' })
  @IsInt()
  @IsPositive()
  idEvento: number;
}

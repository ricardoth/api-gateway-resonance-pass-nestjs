import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsPositive } from 'class-validator';

export class PaginationEventoDto {
  @ApiProperty({ description: 'Número de registros por página', example: 10 })
  @IsInt()
  @IsPositive()
  @Transform(({ value }) => parseInt(value))
  pageSize: number;

  @ApiProperty({ description: 'Número de página', example: 1 })
  @IsInt()
  @IsPositive()
  @Transform(({ value }) => parseInt(value))
  pageNumber: number;
}

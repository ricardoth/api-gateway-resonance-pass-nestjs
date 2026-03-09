import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsInt, IsOptional, IsPositive, IsString } from 'class-validator';
import { BaseDto } from 'src/types/base.dto';

export class CreateEventoDto extends BaseDto {
  @ApiProperty({ description: 'Nombre del evento' })
  @IsString()
  nombreEvento: string;

  @ApiProperty({ description: 'Descripción del evento', required: false })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'Fecha del evento (ISO 8601)', example: '2026-06-15T20:00:00Z' })
  @IsDateString()
  fecha: string;

  @ApiProperty({ description: 'URL o nombre del flyer', required: false })
  @IsString()
  @IsOptional()
  flyer?: string;

  @ApiProperty({ description: 'Observaciones internas del evento', required: false })
  @IsString()
  @IsOptional()
  observacion?: string;

  @ApiProperty({ description: 'Productora responsable del evento', required: false })
  @IsString()
  @IsOptional()
  productoraResponsable?: string;

  @ApiProperty({ description: 'Indica si el evento tiene banner activo', required: false })
  @IsBoolean()
  @IsOptional()
  banner?: boolean;

  @ApiProperty({ description: 'Contenido del banner', required: false })
  @IsString()
  @IsOptional()
  contenidoBanner?: string;

  @ApiProperty({ description: 'ID del lugar donde se realiza el evento' })
  @IsInt()
  @IsPositive()
  idLugar: number;
}

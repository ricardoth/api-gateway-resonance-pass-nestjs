import { ApiProperty } from '@nestjs/swagger';
import { IsHexColor, IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { BaseDto } from 'src/types/base.dto';

export class CreateSectorDto extends BaseDto {
  @ApiProperty({ description: 'Nombre del sector' })
  @IsString()
  nombreSector: string;

  @ApiProperty({ description: 'ID del evento al que pertenece el sector' })
  @IsInt()
  idEvento: number;

  @ApiProperty({ description: 'Capacidad total del sector' })
  @IsInt()
  @Min(1)
  capacidadTotal: number;

  @ApiProperty({ description: 'Capacidad disponible (inicial = capacidadTotal)', required: false })
  @IsInt()
  @Min(0)
  @IsOptional()
  capacidadDisponible?: number;

  @ApiProperty({ description: 'Capacidad actual ocupada', required: false })
  @IsInt()
  @Min(0)
  @IsOptional()
  capacidadActual?: number;

  @ApiProperty({ description: 'Precio base del sector' })
  @IsNumber()
  @Min(0)
  precio: number;

  @ApiProperty({ description: 'Cargo por servicio', required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  cargo?: number;

  @ApiProperty({ description: 'Total (precio + cargo)', required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  total?: number;

  @ApiProperty({ description: 'Color hexadecimal del sector en el mapa', required: false })
  @IsHexColor()
  @IsOptional()
  colorHexa?: string;
}

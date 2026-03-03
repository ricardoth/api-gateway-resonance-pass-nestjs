import { ApiProperty } from '@nestjs/swagger';
import { IsHexColor, IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { BaseDto } from 'src/types/base.dto';

export class CreateSectoreDto extends BaseDto {
  @ApiProperty({ example: 'Platea Norte', description: 'Nombre del sector' })
  @IsString()
  nombreSector: string;

  @ApiProperty({ example: 1, description: 'ID del evento al que pertenece el sector' })
  @IsInt()
  idEvento: number;

  @ApiProperty({ example: 500, description: 'Capacidad total del sector' })
  @IsInt()
  @Min(1)
  capacidadTotal: number;

  @ApiProperty({ example: 500, description: 'Capacidad disponible (inicial = capacidadTotal)' })
  @IsInt()
  @Min(0)
  @IsOptional()
  capacidadDisponible?: number;

  @ApiProperty({ example: 0, description: 'Capacidad actual ocupada' })
  @IsInt()
  @Min(0)
  @IsOptional()
  capacidadActual?: number;

  @ApiProperty({ example: 25000, description: 'Precio base del sector' })
  @IsNumber()
  @Min(0)
  precio: number;

  @ApiProperty({ example: 1500, description: 'Cargo por servicio' })
  @IsNumber()
  @Min(0)
  @IsOptional()
  cargo?: number;

  @ApiProperty({ example: 26500, description: 'Total (precio + cargo)' })
  @IsNumber()
  @Min(0)
  @IsOptional()
  total?: number;

  @ApiProperty({ example: '#FF5733', description: 'Color hexadecimal del sector en el mapa' })
  @IsHexColor()
  @IsOptional()
  colorHexa?: string;
}

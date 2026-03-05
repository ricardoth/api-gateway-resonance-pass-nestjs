import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsInt, IsOptional, IsString } from 'class-validator';

export class FilterUsuarioDto {
  @ApiProperty({ description: 'Filtrar por RUT', required: false })
  @IsInt()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  rut?: number;

  @ApiProperty({ description: 'Filtrar por nombre', required: false })
  @IsString()
  @IsOptional()
  nombres?: string;

  @ApiProperty({ description: 'Filtrar por apellido paterno', required: false })
  @IsString()
  @IsOptional()
  apellidoP?: string;

  @ApiProperty({ description: 'Filtrar por correo', required: false })
  @IsEmail()
  @IsOptional()
  correo?: string;

  @ApiProperty({ description: 'Filtrar por tipo de usuario', required: false })
  @IsInt()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  idTipoUsuario?: number;

  @ApiProperty({ description: 'Filtrar por si es extranjero', required: false })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  esExtranjero?: boolean;
}

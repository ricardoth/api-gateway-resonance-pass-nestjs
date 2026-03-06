import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { BaseDto } from 'src/types/base.dto';

export class CreateUsuarioDto extends BaseDto {
  @ApiProperty({ description: 'ID del tipo de usuario' })
  @IsInt()
  idTipoUsuario: number;

  @ApiProperty({ description: 'RUT sin dígito verificador' })
  @IsInt()
  rut: number;

  @ApiProperty({ description: 'Dígito verificador del RUT' })
  @IsString()
  @Length(1, 1)
  dv: string;

  @ApiProperty({ description: 'Nombres del usuario' })
  @IsString()
  nombres: string;

  @ApiProperty({ description: 'Apellido paterno' })
  @IsString()
  apellidoP: string;

  @ApiProperty({ description: 'Apellido materno' })
  @IsString()
  @IsOptional()
  apellidoM?: string;

  @ApiProperty({ description: 'Dirección del usuario' })
  @IsString()
  @IsOptional()
  direccion?: string;

  @ApiProperty({ description: 'Número de teléfono' })
  @IsString()
  @IsOptional()
  telefono?: string;

  @ApiProperty({ description: 'Correo electrónico' })
  @IsEmail()
  correo: string;

  @ApiProperty({ description: 'Contraseña del usuario' })
  @IsString()
  @MinLength(8)
  contrasena?: string;

  @ApiProperty({ description: 'Indica si el usuario es extranjero' })
  @IsBoolean()
  @IsOptional()
  esExtranjero?: boolean;
}

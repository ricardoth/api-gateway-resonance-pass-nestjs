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
  @ApiProperty({ example: 1, description: 'ID del tipo de usuario' })
  @IsInt()
  idTipoUsuario: number;

  @ApiProperty({ example: 12345678, description: 'RUT sin dígito verificador' })
  @IsInt()
  rut: number;

  @ApiProperty({ example: 'K', description: 'Dígito verificador del RUT' })
  @IsString()
  @Length(1, 1)
  dv: string;

  @ApiProperty({ example: 'Juan', description: 'Nombres del usuario' })
  @IsString()
  nombres: string;

  @ApiProperty({ example: 'Pérez', description: 'Apellido paterno' })
  @IsString()
  apellidoP: string;

  @ApiProperty({ example: 'González', description: 'Apellido materno' })
  @IsString()
  @IsOptional()
  apellidoM?: string;

  @ApiProperty({ example: 'Av. Siempre Viva 742', description: 'Dirección del usuario' })
  @IsString()
  @IsOptional()
  direccion?: string;

  @ApiProperty({ example: '+56912345678', description: 'Número de teléfono' })
  @IsString()
  @IsOptional()
  telefono?: string;

  @ApiProperty({ example: 'juan.perez@email.com', description: 'Correo electrónico' })
  @IsEmail()
  correo: string;

  @ApiProperty({ example: 'MiContraseña123!', description: 'Contraseña del usuario' })
  @IsString()
  @MinLength(8)
  contrasena: string;

  @ApiProperty({ example: false, description: 'Indica si el usuario es extranjero' })
  @IsBoolean()
  @IsOptional()
  esExtranjero?: boolean;
}

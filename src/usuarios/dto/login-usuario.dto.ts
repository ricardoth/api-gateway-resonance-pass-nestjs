import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginUsuarioDto {
  @ApiProperty({ description: 'Correo electrónico del usuario' })
  @IsEmail()
  @IsOptional()
  correo?: string;

  @ApiProperty({ description: 'Contraseña del usuario' })
  @IsString()
  @MinLength(8)
  contrasena?: string;
}

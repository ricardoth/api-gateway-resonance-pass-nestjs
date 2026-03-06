import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({ description: 'ID del usuario' })
  @IsInt()
  idUsuario: number;

  @ApiProperty({ description: 'Contraseña actual del usuario' })
  @IsString()
  @MinLength(8)
  contrasena: string;

  @ApiProperty({ description: 'Nueva contraseña del usuario' })
  @IsString()
  @MinLength(8)
  confirmarContrasena: string;
}

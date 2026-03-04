import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({ example: 1, description: 'ID del usuario' })
  @IsInt()
  idUsuario: number;

  @ApiProperty({ example: 'ContraseñaActual123!', description: 'Contraseña actual del usuario' })
  @IsString()
  @MinLength(8)
  contrasenaActual: string;

  @ApiProperty({ example: 'NuevaContraseña456!', description: 'Nueva contraseña del usuario' })
  @IsString()
  @MinLength(8)
  contrasenaNueva: string;
}

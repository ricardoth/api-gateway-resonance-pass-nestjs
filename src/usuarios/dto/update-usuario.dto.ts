import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @ApiProperty({ example: 1, description: 'ID del usuario a actualizar' })
  @IsInt()
  idUsuario: number;
}

import { PartialType } from '@nestjs/swagger';
import { CreateTiposUsuarioDto } from './create-tipos-usuario.dto';

export class UpdateTiposUsuarioDto extends PartialType(CreateTiposUsuarioDto) {}

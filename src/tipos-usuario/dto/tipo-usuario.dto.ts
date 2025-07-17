import { Expose } from "class-transformer";
import { BaseDto } from "src/types/base.dto";

export class TipoUsuarioDto extends BaseDto {
    @Expose()
    idTipoUsuario: number;
    @Expose()
    nombreTipoUsuario: string;
}
import { Exclude, Expose } from "class-transformer";
import { BaseDto } from "src/types/base.dto";

export class UsuarioDto extends BaseDto {
    @Expose()
    idUsuario: number;
    @Expose()
    idTipoUsuario: number;
    @Expose()
    rut: number;
    @Expose()
    dv: string;
    @Expose()
    nombres: string;
    @Expose()
    apellidoP: string;
    @Expose()
    apellidoM: string;
    @Expose()
    direccion: string;
    @Expose()
    telefono: string;
    @Expose()
    correo: string;
    @Exclude()
    contrasena: string;
    @Expose()
    esExtranjero: boolean;
}
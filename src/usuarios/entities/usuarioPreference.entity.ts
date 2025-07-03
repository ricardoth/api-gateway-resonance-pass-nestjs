import { Expose } from "class-transformer";

export class UsuarioPreference {
    @Expose()
    idUsuario: number;
    @Expose()
    rut: number;
    @Expose()
    nombres: string;
    @Expose()
    apellidoP: string;
    @Expose()
    apellidoM: string;
    @Expose()
    correo: string;
}
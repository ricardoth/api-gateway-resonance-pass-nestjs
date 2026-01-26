import { Expose } from "class-transformer";
import { BaseDto } from "src/types/base.dto";

export class MedioPagoDto extends BaseDto {
    @Expose()
    idMedioPago: number;
    @Expose()
    nombreMedioPago: string;
    @Expose()
    descripcion: string;
    @Expose()
    urlImageBlob: string;
    @Expose()
    nombreImageBlob: string;
}
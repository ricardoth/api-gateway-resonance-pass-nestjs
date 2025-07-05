import { BaseDto } from "src/types/base.dto";

export class MedioPagoDto extends BaseDto {
    idMedioPago: number;
    nombreMedioPago: string;
    descripcion: string;
    urlImageBlob: string;
    nombreImageBlob: string;
}
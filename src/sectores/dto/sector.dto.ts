import { BaseDto } from "src/types/base.dto";

export class SectorDto extends BaseDto{
    idSector: number;
    nombreSector: string;
    capacidadDisponible: number;
    capacidadActual: number;
    capacidadTotal: number;
    precio: number;
    cargo: number;
    total: number;
    colorHexa: string;
}
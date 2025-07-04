import { Expose, Type } from "class-transformer";
import { LugarDto } from "src/lugares/dto/lugar.dto";
import { BaseDto } from "src/types/base.dto";

export class EventoDto extends BaseDto {
    @Expose()
    idEvento: number;
    @Expose()
    nombreEvento: string;
    @Expose()
    descripcion: string;
    @Expose()
    fecha: Date;
    @Expose()
    flyer: string;
    @Expose()
    observacion: string;
    @Expose()
    productoraResponsable: string;
    @Expose()
    banner: boolean;
    @Expose()
    contenidoBanner: string;
    @Expose()
    @Type(() => LugarDto)
    lugar: LugarDto;
}
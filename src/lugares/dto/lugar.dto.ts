import { Expose, Type } from "class-transformer";
import { ComunaDto } from "src/comunas/dto/comuna.dto";
import { BaseDto } from "src/types/base.dto";

export class LugarDto extends BaseDto {
    @Expose()
    idLugar: number;
    @Expose()
    nombreLugar: string;
    @Expose()
    ubicacion: string;
    @Expose()
    numeracion: string;
    @Expose()
    mapaReferencial: string;
    @Expose()
    nombreMapaReferencial: string;
    @Expose()
    @Type(() => ComunaDto)
    comuna: ComunaDto;
}
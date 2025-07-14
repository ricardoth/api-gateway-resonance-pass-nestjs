import { Expose } from "class-transformer";
import { BaseDto } from "src/types/base.dto";

export class RegionDto extends BaseDto {
    @Expose()
    idRegion: number;
    @Expose()
    numeroRegion: number;
    @Expose()
    abreviatura: string;
    @Expose()
    nombreRegion: string;
}
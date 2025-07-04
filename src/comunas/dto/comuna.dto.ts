import { Expose } from "class-transformer";
import { BaseDto } from "src/types/base.dto";

export class ComunaDto extends BaseDto {
    @Expose()
    idComuna: number;
    @Expose()
    nombreComuna: string;
}
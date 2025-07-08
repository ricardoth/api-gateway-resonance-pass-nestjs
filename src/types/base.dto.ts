import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsBoolean, IsDate, IsOptional } from "class-validator";

export class BaseDto { 
    @ApiProperty({ example: "Indicador de Vigencia" })
    @Expose()
    @IsOptional()
    @IsBoolean()
    activo: boolean;
    @Expose()
    @IsOptional()
    @IsDate()
    fechaCreacion: Date;
    @Exclude()
    @IsOptional()
    @IsDate()
    fechaModified: Date;
}
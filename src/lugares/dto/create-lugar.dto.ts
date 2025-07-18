import { ApiProperty } from "@nestjs/swagger";
import { IsBase64, IsNumber, IsPositive, IsString } from "class-validator";
import { BaseDto } from "src/types/base.dto";

export class CreateLugarDto extends BaseDto {
    @ApiProperty({ example: "Identificador de Comuna" })
    @IsNumber()
    @IsPositive()
    idComuna: number;
    @ApiProperty({ example: "Nombre del Lugar" })
    @IsString()
    nombreLugar: string;
    @ApiProperty({ example: "Ubicación del Lugar" })
    @IsString()
    ubicacion: string;
    @ApiProperty({ example: "Numeración del Lugar" })
    @IsString()
    numeracion: string;
    @ApiProperty({ example: "Imagen Referencial del Lugar (Base64)" })
    @IsBase64()
    @IsString()
    mapaReferencial: string;
    @ApiProperty({ example: "Nombre de Imagen Referencial del Lugar" })
    @IsString()
    nombreMapaReferencial: string;
}

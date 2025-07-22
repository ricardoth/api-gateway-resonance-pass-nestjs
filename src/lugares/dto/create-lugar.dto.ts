import { ApiProperty } from "@nestjs/swagger";
import { IsBase64, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { BaseDto } from "src/types/base.dto";

export class CreateLugarDto extends BaseDto {
    @ApiProperty({ example: "Identificador de Comuna" })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idComuna: number;
    @ApiProperty({ example: "Nombre del Lugar" })
    @IsString()
    @IsOptional()
    nombreLugar: string;
    @ApiProperty({ example: "Ubicación del Lugar" })
    @IsString()
    @IsOptional()
    ubicacion: string;
    @ApiProperty({ example: "Numeración del Lugar" })
    @IsString()
    @IsOptional()
    numeracion: string;
    @ApiProperty({ example: "Imagen Referencial del Lugar (Base64)" })
    // @IsBase64()
    @IsString()
    @IsOptional()
    mapaReferencial: string;
    @ApiProperty({ example: "Nombre de Imagen Referencial del Lugar" })
    @IsString()
    @IsOptional()
    nombreMapaReferencial: string;
}

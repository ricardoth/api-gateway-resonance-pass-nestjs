import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { BaseDto } from "src/types/base.dto";

export class CreateMedioPagoDto extends BaseDto {
    @ApiProperty({ example: "Nombre del Medio de Pago" })
    @IsString()
    @IsOptional()
    nombreMedioPago: string;

    @ApiProperty({ example: "Descripción del Medio de Pago" })
    @IsString()
    @IsOptional()
    descripcion: string;

    @ApiProperty({ example: "URL del Blob de la Imagen" })
    @IsString()
    @IsOptional()
    urlImageBlob: string;

    @ApiProperty({ example: "Nombre del Blob de la Imagen" })
    @IsString()
    @IsOptional()
    nombreImageBlob: string;

}

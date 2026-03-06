import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationTicketDto {
    @ApiProperty({ description: 'ID Ticket', required: false })
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idTicket?: number;

    @ApiProperty({ description: 'ID Usuario', required: false })
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idUsuario?: number;

    @ApiProperty({ description: 'ID Evento', required: false })
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idEvento?: number;

    @ApiProperty({ description: 'ID Sector', required: false })
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idSector?: number;

    @ApiProperty({ description: 'ID Medio de Pago', required: false })
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idMedioPago?: number;

    @ApiProperty({ description: 'Número de resultados por página', required: false })
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    pageSize?: number;

    @ApiProperty({ description: 'Número de página', required: false })
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    pageNumber?: number;
}
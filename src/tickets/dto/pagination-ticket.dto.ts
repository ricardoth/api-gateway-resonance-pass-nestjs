import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationTicketDto {
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idTicket?: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    idUsuario?: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    idEvento?: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    idSector?: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    idMedioPago?: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    PageSize?: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    PageNumber?: number;
}
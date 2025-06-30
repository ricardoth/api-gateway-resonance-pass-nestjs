import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationTicketDto {
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idTicket?: number;

    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idUsuario?: number;

    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idEvento?: number;

    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idSector?: number;

    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idMedioPago?: number;

    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    PageSize?: number;

    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    PageNumber?: number;
}
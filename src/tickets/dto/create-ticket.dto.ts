import { PartialType } from "@nestjs/mapped-types";
import { TicketDto } from "./ticket.dto";
import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketDto extends PartialType(TicketDto) {
    @ApiProperty({ description: "Id del Ticket" })
    @IsNumber()
    @IsPositive()
    idTicket: number;
    @ApiProperty({ description: "Id del Usuario" })
    @IsNumber()
    @IsPositive()
    idUsuario: number;
    @ApiProperty({ description: "Id del Evento" })
    @IsNumber()
    @IsPositive()
    idEvento: number;
    @ApiProperty({ description: "Id del Sector" })
    @IsNumber()
    @IsPositive()
    idSector: number;
    @ApiProperty({ description: "Id del Medio de Pago" })
    @IsNumber()
    @IsPositive()
    idMedioPago: number;
    @ApiProperty({ description: "Monto del Pago" })
    @IsNumber()
    @IsPositive()
    montoPago: number;
    @ApiProperty({ description: "Monto Total" })
    @IsNumber()
    @IsPositive()
    montoTotal: number;
    @ApiProperty({ description: "Fecha del Ticket" })
    @IsString()
    fechaTicket: string;
}
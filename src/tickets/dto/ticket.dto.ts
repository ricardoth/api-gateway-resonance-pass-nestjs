import { Expose, Type } from "class-transformer";
import { EventoDto } from "src/eventos/dto/evento.dto";
import { BaseDto } from "src/types/base.dto";

export class TicketDto extends BaseDto {
    @Expose()
    idTicket: number;
    @Expose()
    idUsuario: number;
    @Expose()
    idEvento: number;
    @Expose()
    idSector: number;
    @Expose()
    idMedioPago: number;
    @Expose()
    montoPago: number;
    @Expose()
    montoTotal: number;
    @Expose()
    fechaTicket: string;
    @Expose()
    @Type(() => EventoDto)
    evento: EventoDto;
    
}
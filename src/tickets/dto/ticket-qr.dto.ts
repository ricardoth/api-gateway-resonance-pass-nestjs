import { Expose } from "class-transformer";
import { TicketDto } from "./ticket.dto";

export class TicketQRDto {
    @Expose()
    idTicketQR: number;
    @Expose()
    contenido: string;
    @Expose()
    nombreTicketComprobante: string;
    @Expose()
    activo: boolean;
    @Expose()
    fechaCreacion: string;
    @Expose()
    ticket: TicketDto;
}
import { Expose } from "class-transformer";

export class TicketQR {
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
    
}
import { Expose } from "class-transformer";

export class Ticket {
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
    activo: boolean;
}

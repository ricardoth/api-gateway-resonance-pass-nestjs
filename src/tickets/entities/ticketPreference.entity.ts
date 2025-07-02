import { Expose } from "class-transformer";
import { MerchantOrder } from "src/preferences/entities/merchantOrder.entity";

export class TicketPreference  {
    @Expose()
    idPreference: number;
    @Expose()
    preferenceCode: string;
    @Expose()
    transactionId: string;
    @Expose()
    descargados: boolean;
    @Expose()
    activo: boolean;
    @Expose()
    merchantOrder: MerchantOrder;
}
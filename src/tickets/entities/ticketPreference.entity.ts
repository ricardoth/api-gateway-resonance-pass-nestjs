import { Expose, Type } from "class-transformer";
import { EventoPreference } from "src/eventos/entities/eventoPreference.entity";
import { MerchantOrder } from "src/preferences/entities/merchantOrder.entity";
import { SectorPreference } from "src/sectores/entities/sectorPreference.entity";
import { UsuarioPreference } from "src/usuarios/entities/usuarioPreference.entity";

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
    @Type(() => MerchantOrder) 
    merchantOrder: MerchantOrder;
    @Expose()
    @Type(() => UsuarioPreference) 
    usuario: UsuarioPreference;
    @Expose()
    @Type(() => EventoPreference)
    evento: EventoPreference;
    @Expose()
    @Type(() => SectorPreference)
    sector: SectorPreference;
}
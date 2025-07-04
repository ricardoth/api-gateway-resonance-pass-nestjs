import { Expose, Type } from "class-transformer";
import { EventoPreference } from "src/eventos/dto/evento-preference.dto";
import { MedioPagoPreferenceDto } from "src/medios-pagos/dto/medio-pago-preference.dto";
import { MerchantOrder } from "src/preferences/entities/merchantOrder.entity";
import { SectorPreference } from "src/sectores/dto/sector-preference.dto";
import { UsuarioPreferenceDto } from "src/usuarios/dto/usuario-preference.dto";

export class TicketPreferenceDto  {
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
    @Type(() => UsuarioPreferenceDto) 
    usuario: UsuarioPreferenceDto;
    @Expose()
    @Type(() => EventoPreference)
    evento: EventoPreference;
    @Expose()
    @Type(() => SectorPreference)
    sector: SectorPreference;
    @Expose()
    @Type(() => MedioPagoPreferenceDto)
    medioPago: MedioPagoPreferenceDto;
}
import { Expose, Type } from "class-transformer";
import { EventoDto } from "src/eventos/dto/evento.dto";
import { MedioPagoDto } from "src/medios-pagos/dto/medio-pago.dto";
import { SectorDto } from "src/sectores/dto/sector.dto";
import { BaseDto } from "src/types/base.dto";
import { UsuarioDto } from "src/usuarios/dto/usuario.dto";

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
    @Type(() => UsuarioDto)
    usuario: UsuarioDto;
    @Expose()
    @Type(() => EventoDto)
    evento: EventoDto;
    @Expose()
    @Type(() => SectorDto)
    sector: SectorDto;
    @Expose()
    @Type(() => MedioPagoDto)
    medioPago: MedioPagoDto;
}
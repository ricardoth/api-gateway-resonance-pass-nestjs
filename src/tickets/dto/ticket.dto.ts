import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { EventoDto } from "src/eventos/dto/evento.dto";
import { MedioPagoDto } from "src/medios-pagos/dto/medio-pago.dto";
import { SectorDto } from "src/sectores/dto/sector.dto";
import { BaseDto } from "src/types/base.dto";
import { UsuarioDto } from "src/usuarios/dto/usuario.dto";

export class TicketDto extends BaseDto {
    // @ApiProperty({example: "Id del Ticket"})
    @Expose()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idTicket: number;
    @Expose()
    @IsNumber()
    @IsPositive()
    idUsuario: number;
    @Expose()
    @IsNumber()
    @IsPositive()
    idEvento: number;
    @Expose()
    @IsNumber()
    @IsPositive()
    idSector: number;
    @Expose()
    @IsNumber()
    @IsPositive()
    idMedioPago: number;
    @Expose()
    @IsNumber()
    @IsPositive()
    montoPago: number;
    @Expose()
    @IsNumber()
    @IsPositive()
    montoTotal: number;
    @Expose()
    @IsString()
    fechaTicket: string;
    @Expose()
    @Type(() => UsuarioDto)
    @IsOptional()
    usuario: UsuarioDto;
    @Expose()
    @Type(() => EventoDto)
    @IsOptional()
    evento: EventoDto;
    @Expose()
    @Type(() => SectorDto)
    @IsOptional()
    sector: SectorDto;
    @Expose()
    @Type(() => MedioPagoDto)
    @IsOptional()
    medioPago: MedioPagoDto;
}
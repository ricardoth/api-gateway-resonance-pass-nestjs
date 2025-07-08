import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { EventoDto } from "src/eventos/dto/evento.dto";
import { MedioPagoDto } from "src/medios-pagos/dto/medio-pago.dto";
import { SectorDto } from "src/sectores/dto/sector.dto";
import { BaseDto } from "src/types/base.dto";
import { UsuarioDto } from "src/usuarios/dto/usuario.dto";

export class TicketDto extends BaseDto {
    @ApiProperty({example: "Id del Ticket"})
    @Expose()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    idTicket: number;
    @ApiProperty({example: "Id del Usuario"})
    @Expose()
    @IsNumber()
    @IsPositive()
    idUsuario: number;
    @ApiProperty({example: "Id del Evento"})
    @Expose()
    @IsNumber()
    @IsPositive()
    idEvento: number;
    @ApiProperty({example: "Id del Sector"})
    @Expose()
    @IsNumber()
    @IsPositive()
    idSector: number;
    @ApiProperty({example: "Id del Medio de Pago"})
    @Expose()
    @IsNumber()
    @IsPositive()
    idMedioPago: number;
    @ApiProperty({example: "Monto del Pago"})
    @Expose()
    @IsNumber()
    @IsPositive()
    montoPago: number;
    @ApiProperty({example: "Monto Total"})
    @Expose()
    @IsNumber()
    @IsPositive()
    montoTotal: number;
    @ApiProperty({example: "Fecha de Creación del Ticket"})
    @Expose()
    @IsString()
    fechaTicket: string;
    @ApiProperty({example: "Información Adicional del Usuario"})
    @Expose()
    @Type(() => UsuarioDto)
    @IsOptional()
    usuario: UsuarioDto;
    @ApiProperty({example: "Información Adicional del Evento"})
    @Expose()
    @Type(() => EventoDto)
    @IsOptional()
    evento: EventoDto;
    @ApiProperty({example: "Información Adicional del Sector"})
    @Expose()
    @Type(() => SectorDto)
    @IsOptional()
    sector: SectorDto;
    @ApiProperty({example: "Información Adicional del Medio de Pago"})
    @Expose()
    @Type(() => MedioPagoDto)
    @IsOptional()
    medioPago: MedioPagoDto;
}
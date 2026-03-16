import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { TicketDto } from "src/tickets/dto";

export class CreatePreferenceDto {
    @ApiProperty({ description: 'Descripción del evento' })
    @IsString()
    description: string;
    price: number;
    quantity: number;
    tickets: TicketDto[];
}

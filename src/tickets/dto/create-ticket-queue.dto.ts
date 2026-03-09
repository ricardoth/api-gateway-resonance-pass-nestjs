import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTicketQueueDto {
  @ApiProperty({description: "Código de preferencia de MercadoPago"})
  @IsString()
  preferenceCode: string;
}
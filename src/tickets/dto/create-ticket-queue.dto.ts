import { IsString } from "class-validator";

export class CreateTicketQueueDto {
  @IsString()
  preferenceCode: string;
}
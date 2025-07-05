import { PartialType } from "@nestjs/mapped-types";
import { TicketDto } from "./ticket.dto";

export class CreateTicketDto extends PartialType(TicketDto) {
   
}
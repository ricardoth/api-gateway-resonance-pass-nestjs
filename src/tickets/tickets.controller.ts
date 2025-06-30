import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { PaginationTicketDto } from './dto/pagination-ticket.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  findAll(@Query() paginationTicketDto: PaginationTicketDto) {
    return this.ticketsService.findAll(paginationTicketDto);
  }

  @Get('getQR/:idTicket')
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  findQRTicket(@Param('idTicket') id: number) {
    return this.ticketsService.findQRTicket(id);
  }

}

import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Res } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { PaginationTicketDto } from './dto/pagination-ticket.dto';
import { ApiResponse } from '@nestjs/swagger';
import { TicketDto } from './dto/ticket.dto';
import { CreateTicketDto } from './dto/create-ticket.dto';

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
  findQRTicket(@Param('idTicket', ParseIntPipe) id: number) {
    return this.ticketsService.findQRTicket(id);
  }

  @Get('getVoucherPdf/:idTicket')
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  findVoucherPdfTicket(@Param('idTicket', ParseIntPipe) id: number) {
    return this.ticketsService.findVoucherTicketPDF(id);
  }

  @Get('getPreferenceTickets')
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  findAllPreferenceTicket() {
    return this.ticketsService.findAllPreferenceTickets();
  }

  @Get('getPreferenceTickets/:transactionId')
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  findPreferenceTicketByTransactionId(@Param('transactionId') transactionId: string) {
    return this.ticketsService.findPreferenceTicketByTransactionId(transactionId);
  }

  @Post('createTicket')
  @ApiResponse({status: 201, description: 'Created'}) 
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  createTicket(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.createTicket(createTicketDto);
  }

  @Delete(':idTicket')
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  deleteTicket(@Param('idTicket', ParseIntPipe) id: number) {
    return this.ticketsService.deleteTicket(id);
  }
}

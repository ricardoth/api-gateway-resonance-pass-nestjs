import { Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTicketQueueDto, CreateTicketDto, PaginationTicketDto, TicketDto, TicketQRDto, TicketPreferenceDto } from './dto/index';
import { createApiResponseDto, createApiResponseListDto } from 'src/types/create-api-response.dto';

@ApiTags('Tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  @ApiResponse({status: 200, description: 'OK', type: createApiResponseListDto(TicketDto, 'TicketListDto'), isArray: true})
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
  @ApiResponse({status: 200, description: 'OK', type: createApiResponseListDto(TicketPreferenceDto, 'TicketPreferenceDto'), isArray: true})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  findAllPreferenceTicket() {
    return this.ticketsService.findAllPreferenceTickets();
  }

  @Get('getPreferenceTickets/:transactionId')
  @ApiResponse({status: 200, description: 'OK', type: createApiResponseListDto(TicketPreferenceDto, 'TicketPreferenceTransactionDto'), isArray: true })
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  findPreferenceTicketByTransactionId(@Param('transactionId') transactionId: string) {
    return this.ticketsService.findPreferenceTicketByTransactionId(transactionId);
  }

  @Post('createTicket')
  @ApiResponse({status: 201, description: 'Created', type: createApiResponseDto(TicketDto, 'TicketCreateDto')}) 
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  createTicket(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.createTicket(createTicketDto);
  }

  @Post('generateTickets')
  @ApiResponse({status: 201, description: 'Created', type: createApiResponseListDto(TicketDto, 'GenerateTicketDto'), isArray: true }) 
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  generateTickets(@Body() createTicketDto: CreateTicketDto[]) {
    return this.ticketsService.generateTickets(createTicketDto);
  }

  @Post('generateTicketQueue')
  @ApiResponse({status: 201, description: 'Created'}) 
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  generateTicketQueue(@Body() createTicketQueue: CreateTicketQueueDto) {
    return this.ticketsService.generateTicketQueue(createTicketQueue);
  }

  @Delete(':idTicket')
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  deleteTicket(@Param('idTicket', ParseIntPipe) id: number) {
    return this.ticketsService.deleteTicket(id);
  }
}

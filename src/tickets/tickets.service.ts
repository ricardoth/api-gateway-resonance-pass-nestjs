import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { HttpClientService } from 'src/http-client/http-client.service';
import { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';
import { PaginationTicketDto } from './dto/pagination-ticket.dto';
import { TicketQRDto } from './dto/ticket-qr.dto';
import { ApiResponse } from 'src/types/api-response.interface';
import { mapEntityResponse } from 'src/utils/map-entity';
import { TicketPreferenceDto } from './dto/ticket-preference.dto';
import { handleExceptions } from 'src/utils/handle-exceptions';
import { TicketDto } from './dto/ticket.dto';

@Injectable()
export class TicketsService {
  private config: AxiosRequestConfig;

  constructor(
    private readonly httpClient: HttpClientService,
    private readonly configService: ConfigService
  ) {
    this.config = {
        headers: {
          'Authorization': `Basic ${Buffer.from(`${this.configService.get<string>('userDecimatioBasicAuth')}:${this.configService.get<string>('passDecimatioBasicAuth')}`).toString('base64')}`
        },
      };
  }

  async findAll(paginationTicketDto: PaginationTicketDto) {
    try {
      const { idTicket, idUsuario, idEvento, idSector, idMedioPago, PageNumber, PageSize } = paginationTicketDto;
      let url = `${this.configService.get<string>('urlApiDecimatio')}Ticket`;

      this.config.params = {
        idTicket: idTicket,
        idUsuario: idUsuario,
        idEvento: idEvento,
        idSector: idSector,
        idMedioPago: idMedioPago,
        PageNumber: PageNumber,
        PageSize: PageSize
      }
      
      const tickets = await this.httpClient.get<ApiResponse<TicketDto>>(url, this.config);
      const mapTickets = mapEntityResponse(TicketDto, tickets);
      return mapTickets;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findQRTicket(idTicket: number) {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}Ticket/GetTicketQR?idTicket=${idTicket}`;
      const response = await this.httpClient.get<ApiResponse<TicketQRDto>>(url, this.config);
      const mapEntity = mapEntityResponse(TicketQRDto, response);
      return mapEntity;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findVoucherTicketPDF(idTicket: number) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Ticket/GetTicketVoucherPDF?idTicket=${idTicket}`;
      const voucherPdfTicket = await this.httpClient.get<ApiResponse<TicketQRDto>>(url, this.config);
      const mapVoucher = mapEntityResponse(TicketQRDto, voucherPdfTicket);
      return mapVoucher;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findAllPreferenceTickets() {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Ticket/GetPreferenceTickets`;
      const preferenceTickets = await this.httpClient.get<ApiResponse<TicketPreferenceDto>>(url, this.config);
      const mapPreferenceTickets = mapEntityResponse(TicketPreferenceDto, preferenceTickets);
      return mapPreferenceTickets;
    } catch (error) {
      handleExceptions(error);
    }
  }

  
}
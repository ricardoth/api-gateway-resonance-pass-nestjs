import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { HttpClientService } from 'src/http-client/http-client.service';
import { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';
import { PaginationTicketDto } from './dto/pagination-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { TicketQR } from './entities/ticketQR.entity';
import { ApiResponse } from 'src/types/api-response.interface';
import { mapEntityResponse } from 'src/utils/map-entity';
import { TicketPreference } from './entities/ticketPreference.entity';
import { handleExceptions } from 'src/utils/handle-exceptions';

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
      
      const tickets = await this.httpClient.get<Ticket>(url, this.config);
      return tickets;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findQRTicket(idTicket: number) {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}Ticket/GetTicketQR?idTicket=${idTicket}`;
      const response = await this.httpClient.get<ApiResponse<TicketQR>>(url, this.config);
      const mapEntity = mapEntityResponse(TicketQR, response);
      return mapEntity;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findVoucherTicketPDF(idTicket: number) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Ticket/GetTicketVoucherPDF?idTicket=${idTicket}`;
      const voucherPdfTicket = await this.httpClient.get<ApiResponse<TicketQR>>(url, this.config);
      const mapVoucher = mapEntityResponse(TicketQR, voucherPdfTicket);
      return mapVoucher;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findAllPreferenceTickets() {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Ticket/GetPreferenceTickets`;
      const preferenceTickets = await this.httpClient.get<ApiResponse<TicketPreference>>(url, this.config);
      const mapPreferenceTickets = mapEntityResponse(TicketPreference, preferenceTickets);
      return mapPreferenceTickets;
    } catch (error) {
      handleExceptions(error);
    }
  }

  
}
import { Injectable } from '@nestjs/common';
import { HttpClientService } from 'src/http-client/http-client.service';
import { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';
import { ApiResponse } from 'src/types/api-response.interface';
import { mapEntityResponse } from 'src/utils/map-entity';
import { handleExceptions } from 'src/utils/handle-exceptions';
import { CreateTicketQueueDto, CreateTicketDto, TicketDto, TicketPreferenceDto, TicketQRDto, PaginationTicketDto } from './dto/index';

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

  //#region GET Methods
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

  async findPreferenceTicketByTransactionId(transactionId: string) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Ticket/GetPreferenceTickets/${transactionId}`;
      const preferenceTicket = await this.httpClient.get<ApiResponse<TicketPreferenceDto>>(url, this.config);
      const mapPreferenceTicket = mapEntityResponse(TicketPreferenceDto, preferenceTicket);
      return mapPreferenceTicket;
    } catch (error) {
      handleExceptions(error);
    }
  }
  //#region GET Methods

  //#region POST Methods
  async createTicket(ticketDto: CreateTicketDto) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Ticket`;
      const response = await this.httpClient.post<ApiResponse<TicketDto>>(url, ticketDto, this.config);
      console.log(response);
      const mapEntity = mapEntityResponse(TicketDto, response);
      return mapEntity;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async generateTickets(ticketsDto: CreateTicketDto[]) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Ticket/GenerarTickets`;
      const response = await this.httpClient.post<ApiResponse<TicketDto[]>>(url, ticketsDto, this.config);
      const mapEntity = mapEntityResponse(TicketDto, response);
      return mapEntity;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async generateTicketQueue(createTicketQueue: CreateTicketQueueDto) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Ticket/TicketQueue`;
      const response = await this.httpClient.post<any>(url, createTicketQueue, this.config);
      console.log(response, 'RESPUESTA API');
      return response;
    } catch (error) {
       console.log(error, 'RESPUESTA ERR');
      handleExceptions(error);
    }
  }

  //#endregion POST Methods

  //#region DELETE Methods
  async deleteTicket(idTicket: number) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Ticket?idTicket=${idTicket}`;
      const response = await this.httpClient.delete(url, this.config);
      return response;
    } catch (error) {
      handleExceptions(error);
    }
  }
  //#endregion DELETE Methods
  
}
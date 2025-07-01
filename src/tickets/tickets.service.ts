import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { HttpClientService } from 'src/http-client/http-client.service';
import { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';
import { PaginationTicketDto } from './dto/pagination-ticket.dto';
import { Ticket } from './entities/ticket.entity';

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
      return this.handleExceptions(error);
    }
  }

  async findQRTicket(idTicket: number) {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}Ticket/GetTicketQR?idTicket=${idTicket}`;
      const qrTicket = await this.httpClient.get<any>(url, this.config);
      return qrTicket;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findVoucherTicketPDF(idTicket: number) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Ticket/GetTicketVoucherPDF?idTicket=${idTicket}`;
      const voucherPdfTicket = await this.httpClient.get<any>(url, this.config);
      return voucherPdfTicket;
    } catch (error) {
      console.log(error, 'ERRO')
      this.handleExceptions(error);
    }
  }

  private handleExceptions(error: any) {
      if(error.status == 400) throw new BadRequestException(`${error}`);
      if(error.status == 404) throw new NotFoundException(`${error}`);
      throw new InternalServerErrorException(`${error}`);
  }
}
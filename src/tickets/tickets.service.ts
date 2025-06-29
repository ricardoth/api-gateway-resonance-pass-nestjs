import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { HttpClientService } from 'src/http-client/http-client.service';
import { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';
import { PaginationTicketDto } from './dto/pagination-ticket.dto';

@Injectable()
export class TicketsService {

  
  constructor(
    private readonly httpClient: HttpClientService,
    private readonly configService: ConfigService
  ) {
    
  }

  create(createTicketDto: CreateTicketDto) {
    return 'This action adds a new ticket';
  }

  async findAll(paginationTicketDto: PaginationTicketDto) {
    console.log(paginationTicketDto, 'PAGINACION')
    let url = 'https://api-decimatio-dev.azurewebsites.net/api/Ticket';
    const headers: AxiosRequestConfig = {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${this.configService.get<string>('userDecimatioBasicAuth')}:${this.configService.get<string>('passDecimatioBasicAuth')}`).toString('base64')}`
      }
    };

    if(paginationTicketDto) {
      url = url + `?idTicket=${paginationTicketDto.idTicket}`
    }

    let tickets = await this.httpClient.get<any>(url, headers);
    // console.log(mediosPagos);
    return tickets;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}

class MedioPago {
  idMedioPago: number;
  nombreMedioPago: string;
}

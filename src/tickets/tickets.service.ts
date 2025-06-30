import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { HttpClientService } from 'src/http-client/http-client.service';
import { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';
import { PaginationTicketDto } from './dto/pagination-ticket.dto';

@Injectable()
export class TicketsService {
  private headers: AxiosRequestConfig;

  constructor(
    private readonly httpClient: HttpClientService,
    private readonly configService: ConfigService
  ) {
    this.headers = {
        headers: {
          'Authorization': `Basic ${Buffer.from(`${this.configService.get<string>('userDecimatioBasicAuth')}:${this.configService.get<string>('passDecimatioBasicAuth')}`).toString('base64')}`
        }
      };
  }

  create(createTicketDto: CreateTicketDto) {
    return 'This action adds a new ticket';
  }

  async findAll(paginationTicketDto: PaginationTicketDto) {
    try {
      const { idTicket, idUsuario, idEvento, idSector, idMedioPago, PageNumber, PageSize } = paginationTicketDto;
      let url = `${this.configService.get<string>('urlApiDecimatio')}Ticket`;

      if(idTicket) url += `?idTicket=${paginationTicketDto.idTicket}`;
      if(idUsuario) url += `&idUsuario=${paginationTicketDto.idUsuario}`;
      if(idEvento) url += `&idEvento=${paginationTicketDto.idEvento}`;
      if(idSector) url += `&idSector=${paginationTicketDto.idSector}`;

      console.log(url);
      let tickets = await this.httpClient.get<any>(url, this.headers);
      return tickets;

    } catch (error) {
      console.log(error)
      if(error.status == 400) throw new NotFoundException(` ${error}  ErrorRRR`);
      throw error
    }
 

    
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

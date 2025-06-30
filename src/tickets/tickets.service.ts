import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { HttpClientService } from 'src/http-client/http-client.service';
import { AxiosRequestConfig } from 'axios';
import { ConfigService } from '@nestjs/config';
import { PaginationTicketDto } from './dto/pagination-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { plainToInstance } from 'class-transformer';

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

  create(createTicketDto: CreateTicketDto) {
    return 'This action adds a new ticket';
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

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }

  private handleExceptions(error: any) {
      if(error.status == 400) throw new BadRequestException(`${error}`);
      if(error.status == 404) throw new NotFoundException(`${error}`);
      throw new InternalServerErrorException(`${error}`);
  }
}
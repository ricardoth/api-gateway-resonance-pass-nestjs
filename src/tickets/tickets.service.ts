import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { HttpClientService } from 'src/http-client/http-client.service';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class TicketsService {

  
  constructor(
    private httpClient: HttpClientService
  ) {
    
  }

  create(createTicketDto: CreateTicketDto) {
    return 'This action adds a new ticket';
  }

  async findAll() {
    const headers: AxiosRequestConfig = {
      headers: {
        'Authorization': 'Basic VXNyQXBpRGVjaW1hdGlvOmExMzk5NzQyM2I2ZGY2YTcxMzE5ODFkMjE1ZjFkM2Ji'
      }
    };

    let mediosPagos = await this.httpClient.get<MedioPago>('https://api-decimatio-dev.azurewebsites.net/api/MedioPago', headers);
    console.log(mediosPagos);
    return `This action returns all tickets`;
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

import { Injectable } from '@nestjs/common';
import { MercadoPagoNotificationDto } from './dto/mercado-pago-notification.dto';
import { handleExceptions } from 'src/utils/handle-exceptions';
import { AxiosRequestConfig } from 'axios';
import { HttpClientService } from 'src/http-client/http-client.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NotificationsService {
  private config: AxiosRequestConfig;

  
  constructor(
    private readonly httpClient: HttpClientService,
    private readonly configService: ConfigService
  ) {
    this.config = {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${this.configService.get<string>('userPagosBasicAuth')}:${this.configService.get<string>('passPagosBasicAuth')}`).toString('base64')}`
      }
    }
  }

  async create(mercadoPagoNotificationDto: MercadoPagoNotificationDto) {
    try {
      let url = `${this.configService.get<string>('urlApiPagos')}Notification`;
      const response = await this.httpClient.post<string>(url, mercadoPagoNotificationDto, this.config);
      return response;
    } catch (error) {
      handleExceptions(error);
    }
  }
}

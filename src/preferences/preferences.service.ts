import { Injectable } from '@nestjs/common';
import { CreatePreferenceDto } from './dto/create-preference.dto';
import { AxiosRequestConfig } from 'axios';
import { HttpClientService } from 'src/http-client/http-client.service';
import { ConfigService } from '@nestjs/config';
import { handleExceptions } from 'src/utils/handle-exceptions';

@Injectable()
export class PreferencesService {
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

  create(createPreferenceDto: CreatePreferenceDto) {
    try {
      const url = `${this.configService.get<string>('PAGOS_SERVICE_URL')}/Preference`;
      return this.httpClient.post(url, createPreferenceDto, this.config);
    } catch (error) {
      handleExceptions(error);
    }
  }

  
}

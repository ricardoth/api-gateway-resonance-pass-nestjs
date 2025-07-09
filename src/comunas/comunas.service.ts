import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { HttpClientService } from 'src/http-client/http-client.service';
import { ApiResponse } from 'src/types/api-response.interface';
import { ComunaDto } from './dto/comuna.dto';
import { handleExceptions } from 'src/utils/handle-exceptions';
import { mapEntityResponse } from 'src/utils/map-entity';

@Injectable()
export class ComunasService {
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

  async findAllByRegion(idComuna: number) {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}Comuna/${idComuna}`;
      const response = await this.httpClient.get<ApiResponse<ComunaDto>>(url, this.config);
      const mapEntity = mapEntityResponse(ComunaDto, response);
      return mapEntity;
    } catch (error) {
      handleExceptions(error);
    }
  }
  
}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { HttpClientService } from 'src/http-client/http-client.service';
import { RegionDto } from './dto/region.dto';
import { ApiResponse } from 'src/types/api-response.interface';
import { mapEntityResponse } from 'src/utils/map-entity';
import { handleExceptions } from 'src/utils/handle-exceptions';

@Injectable()
export class RegionesService {
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
  

  async findAll() {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Region`;
      const response = await this.httpClient.get<ApiResponse<RegionDto>>(url, this.config);
      console.log(response);
      const mapRegiones = mapEntityResponse(RegionDto, response);
      return mapRegiones;
    } catch (error) {
      handleExceptions(error);
    }
  }
}

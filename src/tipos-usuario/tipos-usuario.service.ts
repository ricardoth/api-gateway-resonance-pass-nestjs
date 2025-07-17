import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { HttpClientService } from 'src/http-client/http-client.service';
import { ApiResponse } from 'src/types/api-response.interface';
import { handleExceptions } from 'src/utils/handle-exceptions';
import { mapEntityResponse } from 'src/utils/map-entity';
import { TipoUsuarioDto } from './dto/tipo-usuario.dto';

@Injectable()
export class TiposUsuarioService {
  private config: AxiosRequestConfig;

  constructor(
    private readonly httpClient: HttpClientService,
    private readonly configService: ConfigService
  ) {
      this.config = {
        headers: {
           'Authorization': `Basic ${Buffer.from(`${this.configService.get<string>('userDecimatioBasicAuth')}:${this.configService.get<string>('passDecimatioBasicAuth')}`).toString('base64')}`
         }
      }
    }
 
  async findAll() {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}TipoUsuario`;
      const response = await this.httpClient.get<ApiResponse<TipoUsuarioDto>>(url, this.config);
      const mapEntity = mapEntityResponse(TipoUsuarioDto, response);
      return mapEntity;
    } catch (error) {
      handleExceptions(error);
    }
  }


  
}

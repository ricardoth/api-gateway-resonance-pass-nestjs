import { Injectable } from '@nestjs/common';
import { CreateMediosPagoDto } from './dto/create-medios-pago.dto';
import { UpdateMediosPagoDto } from './dto/update-medios-pago.dto';
import { AxiosRequestConfig } from 'axios';
import { HttpClientService } from 'src/http-client/http-client.service';
import { ConfigService } from '@nestjs/config';
import { handleExceptions } from 'src/utils/handle-exceptions';
import { mapEntityResponse } from 'src/utils/map-entity';
import { MedioPagoDto } from './dto/medio-pago.dto';
import { ApiResponse } from 'src/types/api-response.interface';

@Injectable()
export class MediosPagosService {
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

  async create(createMediosPagoDto: CreateMediosPagoDto) {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}MedioPago`;
      const response = await this.httpClient.post<ApiResponse<MedioPagoDto>>(url, createMediosPagoDto, this.config);
      const mapEntity = mapEntityResponse(MedioPagoDto, response);
      return mapEntity;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findAll() {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}MedioPago`;
      const response = await this.httpClient.get<ApiResponse<MedioPagoDto>>(url, this.config);
      const mapEntity = mapEntityResponse(MedioPagoDto, response);
      return mapEntity;
    } catch (error) {
      handleExceptions(error);  
    }
  }

  async findOne(id: number) {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}MedioPago/${id}`;
      const response = await this.httpClient.get<ApiResponse<MedioPagoDto>>(url, this.config);
      return response;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async update(id: number, updateMediosPagoDto: UpdateMediosPagoDto) {
    try {
        let url = `${this.configService.get<string>('urlApiDecimatio')}MedioPago?id=${id}`;
        const response = await this.httpClient.put<ApiResponse<MedioPagoDto>>(url, updateMediosPagoDto, this.config);
        console.log(response);
        const mapEntity = mapEntityResponse(MedioPagoDto, response);
        return mapEntity;
      } catch (error) {
        handleExceptions(error);
      }
  }

  async remove(id: number) {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}MedioPago/${id}`;
      const response = await this.httpClient.delete(url, this.config);
      return response;
    } catch (error) {
      handleExceptions(error);
    }
  }
}

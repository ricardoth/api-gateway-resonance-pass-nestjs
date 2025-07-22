import { Injectable } from '@nestjs/common';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';
import { AxiosRequestConfig } from 'axios';
import { HttpClientService } from 'src/http-client/http-client.service';
import { ConfigService } from '@nestjs/config';
import { handleExceptions } from 'src/utils/handle-exceptions';
import { mapEntityResponse } from 'src/utils/map-entity';
import { LugarDto } from './dto/lugar.dto';
import { ApiResponse } from 'src/types/api-response.interface';

@Injectable()
export class LugaresService {
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

  async create(createLugareDto: CreateLugarDto) {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}Lugar`;
      const response = await this.httpClient.post<ApiResponse<LugarDto>>(url, createLugareDto, this.config);
      const mapEntity = mapEntityResponse(LugarDto, response);
      return mapEntity;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findAll() {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}Lugar`;
      const response = await this.httpClient.get<ApiResponse<LugarDto>>(url, this.config);
      const mapEntity = mapEntityResponse(LugarDto, response);
      return mapEntity;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findOne(id: number) {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}Lugar/${id}`;
      const response = await this.httpClient.get<ApiResponse<LugarDto>>(url, this.config);
      const mapEntity = mapEntityResponse(LugarDto, response);
      return mapEntity;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async update(id: number, updateLugareDto: UpdateLugarDto) {
    try {
      let url = `${this.configService.get<string>('urlApiDecimatio')}Lugar?id=${id}`;
      const response = await this.httpClient.put<ApiResponse<LugarDto>>(url, updateLugareDto, this.config);
      console.log(response);
      const mapEntity = mapEntityResponse(LugarDto, response);
      return mapEntity;
    } catch (error) {
      console.error('Error updating lugar:', error);
      handleExceptions(error);
      
    }
  }

  remove(id: number) {
    return `This action removes a #${id} lugare`;
  }
}

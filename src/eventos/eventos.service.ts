import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { HttpClientService } from 'src/http-client/http-client.service';
import { ApiResponse } from 'src/types/api-response.interface';
import { handleExceptions } from 'src/utils/handle-exceptions';
import { mapEntityResponse } from 'src/utils/map-entity';
import { CreateEventoDto } from './dto/create-evento.dto';
import { EventoPreference } from './dto/evento-preference.dto';
import { EventoDto } from './dto/evento.dto';
import { PaginationEventoDto } from './dto/pagination-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Injectable()
export class EventosService {
  private readonly config: AxiosRequestConfig;

  constructor(
    private readonly httpClient: HttpClientService,
    private readonly configService: ConfigService,
  ) {
    this.config = {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${this.configService.get<string>('userDecimatioBasicAuth')}:${this.configService.get<string>('passDecimatioBasicAuth')}`,
        ).toString('base64')}`,
      },
    };
  }

  async findAll() {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Evento`;
      const response = await this.httpClient.get<ApiResponse<EventoDto>>(url, this.config);
      return mapEntityResponse(EventoDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async create(createEventoDto: CreateEventoDto) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Evento`;
      const response = await this.httpClient.post<ApiResponse<EventoDto>>(url, createEventoDto, this.config);
      return mapEntityResponse(EventoDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async update(updateEventoDto: UpdateEventoDto) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Evento`;
      const response = await this.httpClient.put<ApiResponse<EventoDto>>(url, updateEventoDto, this.config);
      return mapEntityResponse(EventoDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findOne(id: number) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Evento/${id}`;
      const response = await this.httpClient.get<ApiResponse<EventoDto>>(url, this.config);
      return mapEntityResponse(EventoDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async remove(id: number) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Evento/${id}`;
      const response = await this.httpClient.delete(url, this.config);
      return response;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findCombobox() {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Evento/GetEventosCombobox`;
      const response = await this.httpClient.get<ApiResponse<EventoPreference>>(url, this.config);
      return mapEntityResponse(EventoPreference, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findPaginacion(paginationDto: PaginationEventoDto) {
    try {
      const { pageSize, pageNumber } = paginationDto;
      const url = `${this.configService.get<string>('urlApiDecimatio')}Evento/GetEventosPagination?pageSize=${pageSize}&pageNumber=${pageNumber}`;
      const response = await this.httpClient.get<ApiResponse<EventoDto>>(url, this.config); 
      return mapEntityResponse(EventoDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findFilter(filtro: string) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Evento/GetEventosFilter?filtro=${encodeURIComponent(filtro)}`;
      const response = await this.httpClient.get<ApiResponse<EventoDto>>(url, this.config);
      return mapEntityResponse(EventoDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }
}

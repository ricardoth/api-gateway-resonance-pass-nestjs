import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { HttpClientService } from 'src/http-client/http-client.service';
import { ApiResponse } from 'src/types/api-response.interface';
import { handleExceptions } from 'src/utils/handle-exceptions';
import { mapEntityResponse } from 'src/utils/map-entity';
import { CreateSectorDto } from './dto/create-sector.dto';
import { SectorDto } from './dto/sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';

@Injectable()
export class SectoresService {
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
      const url = `${this.configService.get<string>('urlApiDecimatio')}Sector`;
      const response = await this.httpClient.get<ApiResponse<SectorDto>>(url, this.config);
      return mapEntityResponse(SectorDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async create(createSectorDto: CreateSectorDto) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Sector`;
      const response = await this.httpClient.post<ApiResponse<SectorDto>>(url, createSectorDto, this.config);
      return mapEntityResponse(SectorDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async update(id: number, updateSectorDto: UpdateSectorDto) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Sector?id=${id}`;
      const response = await this.httpClient.put<ApiResponse<SectorDto>>(url, updateSectorDto, this.config);
      return mapEntityResponse(SectorDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findByEvento(idEvento: number) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Sector/GetSectoresByEvento/${idEvento}`;
      const response = await this.httpClient.get<ApiResponse<SectorDto>>(url, this.config);
      return mapEntityResponse(SectorDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findOne(id: number) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Sector/${id}`;
      const response = await this.httpClient.get<ApiResponse<SectorDto>>(url, this.config);
      return mapEntityResponse(SectorDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async remove(id: number) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Sector/${id}`;
      const response = await this.httpClient.delete(url, this.config);
      return response;
    } catch (error) {
      handleExceptions(error);
    }
  }
}

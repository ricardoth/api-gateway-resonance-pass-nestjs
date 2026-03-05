import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { HttpClientService } from 'src/http-client/http-client.service';
import { ApiResponse } from 'src/types/api-response.interface';
import { handleExceptions } from 'src/utils/handle-exceptions';
import { mapEntityResponse } from 'src/utils/map-entity';
import { ChangePasswordDto } from './dto/change-password.dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { FilterUsuarioDto } from './dto/filter-usuario.dto';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioQueryFilterDto } from './dto/usuario-query-filter.dto';

@Injectable()
export class UsuariosService {
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

  async findAll(usuarioQueryFilterDto: UsuarioQueryFilterDto) {
    try {
      const paginationFilter =  `pageSize=${usuarioQueryFilterDto.pageSize}&pageNumber=${usuarioQueryFilterDto.pageNumber}`;
      const queryFilter = usuarioQueryFilterDto.query ? `&query=${usuarioQueryFilterDto.query}` : '';

      const url = `${this.configService.get<string>('urlApiDecimatio')}Usuario?${paginationFilter}${queryFilter}`;
      const response = await this.httpClient.get<ApiResponse<UsuarioDto>>(url, this.config);
      return mapEntityResponse(UsuarioDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Usuario`;
      const response = await this.httpClient.post<ApiResponse<UsuarioDto>>(url, createUsuarioDto, this.config);
      return mapEntityResponse(UsuarioDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async update(updateUsuarioDto: UpdateUsuarioDto) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Usuario`;
      const response = await this.httpClient.put<ApiResponse<UsuarioDto>>(url, updateUsuarioDto, this.config);
      return mapEntityResponse(UsuarioDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findOne(id: number) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Usuario/${id}`;
      const response = await this.httpClient.get<ApiResponse<UsuarioDto>>(url, this.config);
      return mapEntityResponse(UsuarioDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async remove(id: number) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Usuario/${id}`;
      const response = await this.httpClient.delete(url, this.config);
      return response;
    } catch (error) {
      handleExceptions(error);
    }
  }

  async findByFilter(filterUsuarioDto: FilterUsuarioDto) {
    try {
      let filter = '';
        if (filterUsuarioDto.rut) filter += `filtro=${filterUsuarioDto.rut}`;
        if (filterUsuarioDto.nombres) filter += `filtro=${filterUsuarioDto.nombres}`;
        if (filterUsuarioDto.apellidoP) filter += `filtro=${filterUsuarioDto.apellidoP}`;
        if (filterUsuarioDto.correo) filter += `filtro=${filterUsuarioDto.correo}`;
        if (filterUsuarioDto.idTipoUsuario) filter += `filtro=${filterUsuarioDto.idTipoUsuario}`;
        if (filterUsuarioDto.esExtranjero !== undefined) filter += `filtro=${filterUsuarioDto.esExtranjero}`;

      const url = `${this.configService.get<string>('urlApiDecimatio')}Usuario/GetUsersFilter?${filter}`;
      const response = await this.httpClient.get<ApiResponse<UsuarioDto>>(url, this.config);
      return mapEntityResponse(UsuarioDto, response);
    } catch (error) {
      console.log(error)
      handleExceptions(error);
    }
  }

  async login(loginUsuarioDto: LoginUsuarioDto) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Usuario/Login`;
      const response = await this.httpClient.post<ApiResponse<UsuarioDto>>(url, loginUsuarioDto, this.config);
      return mapEntityResponse(UsuarioDto, response);
    } catch (error) {
      handleExceptions(error);
    }
  }

  async changePassword(changePasswordDto: ChangePasswordDto) {
    try {
      const url = `${this.configService.get<string>('urlApiDecimatio')}Usuario/ChangePassword`;
      const response = await this.httpClient.post<ApiResponse<UsuarioDto>>(url, changePasswordDto, this.config);
      return response;
    } catch (error) {
      handleExceptions(error);
    }
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  async login(user: string, password: string) {
    const baseUrl = this.config.get<string>('AUTH_SERVICE_URL');

    console.log(baseUrl, 'baseUrl auth')
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`${baseUrl}/api/Token`, { user, password }),
      );
      return data; 
    } catch (error) {
      if (error.response?.status === 401)
        throw new UnauthorizedException('Credenciales inválidas');
      throw error;
    }
  }
}
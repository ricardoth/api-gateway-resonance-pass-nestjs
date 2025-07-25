import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpClientService {
    private readonly logger = new Logger(HttpClientService.name);
   
    constructor(
        private readonly httpService: HttpService
    ) {
    }

    public async get<T>(url: string, config?: AxiosRequestConfig) {
        this.logger.log(`[INFO] GET Request to: ${url}`);

        try {
            const response = await firstValueFrom(this.httpService.get<T>(url, config));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    public async post<T>(url: string, data: any, config?: AxiosRequestConfig) {
        this.logger.log(`[INFO] POST Request to: ${url}`);

        try {
            const response = await firstValueFrom(this.httpService.post<T>(url, data, config));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    public async put<T>(url: string, data: any, config?: AxiosRequestConfig) {
        this.logger.log(`[INFO] PUT Request to: ${url}`);

        try {
            const response = await firstValueFrom(this.httpService.put<T>(url, data, config));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    public async delete(url: string, config?: AxiosRequestConfig) {
        this.logger.log(`[INFO] DELETE Request to: ${url}`);

        try {
            const response = await firstValueFrom(this.httpService.delete(url, config));
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}

import {
  ExceptionFilter, Catch, ArgumentsHost,
  HttpException, HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status =
      exception?.response?.status ??
      exception?.status ??
      HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception?.response?.data?.message ??
      exception?.message ??
      'Error interno del servidor';

    response.status(status).json({ statusCode: status, message });
  }
}
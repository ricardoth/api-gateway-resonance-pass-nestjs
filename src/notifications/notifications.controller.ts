import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { MercadoPagoNotificationDto } from './dto/mercado-pago-notification.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  create(@Body() createNotificationDto: MercadoPagoNotificationDto) {
    return this.notificationsService.create(createNotificationDto);
  }
}

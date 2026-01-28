import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { MercadoPagoNotificationDto } from './dto/mercado-pago-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  create(@Body() createNotificationDto: MercadoPagoNotificationDto) {
    return this.notificationsService.create(createNotificationDto);
  }
}

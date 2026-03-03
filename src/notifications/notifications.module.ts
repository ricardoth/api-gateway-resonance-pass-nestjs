import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpClientModule } from 'src/http-client/http-client.module';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService],
  imports: [ ConfigModule, HttpClientModule]
})
export class NotificationsModule {}

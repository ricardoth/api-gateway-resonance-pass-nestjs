import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { HttpClientModule } from 'src/http-client/http-client.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService],
  imports: [
    ConfigModule,
    HttpClientModule
  ],
  // exports: [TicketsService]
})
export class TicketsModule {}

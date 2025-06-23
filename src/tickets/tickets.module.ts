import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { HttpClientModule } from 'src/http-client/http-client.module';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService],
  imports: [HttpClientModule],
  exports: [TicketsService]
})
export class TicketsModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { HttpClientModule } from './http-client/http-client.module';
import { ConfigModule } from '@nestjs/config';
import { HttpClientService } from './http-client/http-client.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TicketsModule, 
    HttpClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

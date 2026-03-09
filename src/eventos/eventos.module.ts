import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpClientModule } from 'src/http-client/http-client.module';

@Module({
  controllers: [EventosController],
  providers: [EventosService],
  imports: [
    ConfigModule,
    HttpClientModule
  ],
})
export class EventosModule {}

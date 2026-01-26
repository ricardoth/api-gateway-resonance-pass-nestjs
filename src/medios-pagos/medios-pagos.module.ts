import { Module } from '@nestjs/common';
import { MediosPagosService } from './medios-pagos.service';
import { MediosPagosController } from './medios-pagos.controller';
import { HttpClientModule } from 'src/http-client/http-client.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [MediosPagosController],
  providers: [MediosPagosService],
  imports: [
    HttpClientModule,
    ConfigModule
  ],
})
export class MediosPagosModule {}

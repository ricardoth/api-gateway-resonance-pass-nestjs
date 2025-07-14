import { Module } from '@nestjs/common';
import { RegionesService } from './regiones.service';
import { RegionesController } from './regiones.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpClientModule } from 'src/http-client/http-client.module';

@Module({
  controllers: [RegionesController],
  providers: [RegionesService],
  imports: [
    ConfigModule,
    HttpClientModule
  ]
})
export class RegionesModule {}

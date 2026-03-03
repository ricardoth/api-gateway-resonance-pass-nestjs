import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpClientModule } from 'src/http-client/http-client.module';
import { SectoresController } from './sectores.controller';
import { SectoresService } from './sectores.service';

@Module({
  controllers: [SectoresController],
  providers: [SectoresService],
  imports: [HttpClientModule, ConfigModule],
})
export class SectoresModule {}

import { Module } from '@nestjs/common';
import { ComunasService } from './comunas.service';
import { ComunasController } from './comunas.controller';
import { HttpClientModule } from 'src/http-client/http-client.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [ComunasController],
  providers: [ComunasService],
  imports: [
    HttpClientModule,
    ConfigModule
  ]
})
export class ComunasModule {}

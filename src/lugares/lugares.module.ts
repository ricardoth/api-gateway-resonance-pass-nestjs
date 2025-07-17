import { Module } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import { LugaresController } from './lugares.controller';
import { HttpClientModule } from 'src/http-client/http-client.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [LugaresController],
  providers: [LugaresService],
  imports: [
    HttpClientModule,
    ConfigModule
  ],
})
export class LugaresModule {}

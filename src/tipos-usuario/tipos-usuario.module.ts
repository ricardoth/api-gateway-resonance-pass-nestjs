import { Module } from '@nestjs/common';
import { TiposUsuarioService } from './tipos-usuario.service';
import { TiposUsuarioController } from './tipos-usuario.controller';
import { HttpClientModule } from 'src/http-client/http-client.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [TiposUsuarioController],
  providers: [TiposUsuarioService],
  imports: [
    HttpClientModule,
    ConfigModule
  ]
})
export class TiposUsuarioModule {}

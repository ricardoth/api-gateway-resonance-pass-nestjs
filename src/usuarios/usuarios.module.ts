import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpClientModule } from 'src/http-client/http-client.module';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [HttpClientModule, ConfigModule, AuthModule],
})
export class UsuariosModule {}

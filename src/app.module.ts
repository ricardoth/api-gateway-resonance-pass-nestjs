import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { HttpClientModule } from './http-client/http-client.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { EnvConfiguration } from './config/app.config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EventosModule } from './eventos/eventos.module';
import { PreferencesModule } from './preferences/preferences.module';
import { NotificationsModule } from './notifications/notifications.module';
import { SectoresModule } from './sectores/sectores.module';
import { LugaresModule } from './lugares/lugares.module';
import { ComunasModule } from './comunas/comunas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],

    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TicketsModule, 
    HttpClientModule, UsuariosModule, EventosModule, PreferencesModule, NotificationsModule, SectoresModule, LugaresModule, ComunasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}

import { Module } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { PreferencesController } from './preferences.controller';
import { HttpClientModule } from 'src/http-client/http-client.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [PreferencesController],
  providers: [PreferencesService],
  imports: [ HttpClientModule, ConfigModule ],
})
export class PreferencesModule {}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { CreatePreferenceDto } from './dto/create-preference.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { ApiResponse } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  @ApiResponse({status: 200, description: 'OK'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 404, description: 'Not Found'})
  create(@Body() createPreferenceDto: CreatePreferenceDto) {
    return this.preferencesService.create(createPreferenceDto);
  }

}

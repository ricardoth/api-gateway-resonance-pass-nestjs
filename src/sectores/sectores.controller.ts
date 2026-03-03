import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSectoreDto } from './dto/create-sectore.dto';
import { UpdateSectoreDto } from './dto/update-sectore.dto';
import { SectoresService } from './sectores.service';

@ApiTags('Sector')
@Controller('Sector')
export class SectoresController {
  constructor(private readonly sectoresService: SectoresService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  findAll() {
    return this.sectoresService.findAll();
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createSectoreDto: CreateSectoreDto) {
    return this.sectoresService.create(createSectoreDto);
  }

  @Put(':idSector')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  update(
    @Param('idSector', ParseIntPipe) id: number,
    @Body() updateSectoreDto: UpdateSectoreDto,
  ) {
    return this.sectoresService.update(id, updateSectoreDto);
  }

  @Get('GetSectoresByEvento/:idEvento')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  findByEvento(@Param('idEvento', ParseIntPipe) idEvento: number) {
    return this.sectoresService.findByEvento(idEvento);
  }

  @Get(':idSector')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  findOne(@Param('idSector', ParseIntPipe) id: number) {
    return this.sectoresService.findOne(id);
  }

  @Delete(':idSector')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  remove(@Param('idSector', ParseIntPipe) id: number) {
    return this.sectoresService.remove(id);
  }
}

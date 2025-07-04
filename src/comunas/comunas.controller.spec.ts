import { Test, TestingModule } from '@nestjs/testing';
import { ComunasController } from './comunas.controller';
import { ComunasService } from './comunas.service';

describe('ComunasController', () => {
  let controller: ComunasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComunasController],
      providers: [ComunasService],
    }).compile();

    controller = module.get<ComunasController>(ComunasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

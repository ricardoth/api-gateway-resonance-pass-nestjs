import { Test, TestingModule } from '@nestjs/testing';
import { MediosPagosController } from './medios-pagos.controller';
import { MediosPagosService } from './medios-pagos.service';

describe('MediosPagosController', () => {
  let controller: MediosPagosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediosPagosController],
      providers: [MediosPagosService],
    }).compile();

    controller = module.get<MediosPagosController>(MediosPagosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

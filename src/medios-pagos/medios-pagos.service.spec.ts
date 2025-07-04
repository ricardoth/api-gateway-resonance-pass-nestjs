import { Test, TestingModule } from '@nestjs/testing';
import { MediosPagosService } from './medios-pagos.service';

describe('MediosPagosService', () => {
  let service: MediosPagosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediosPagosService],
    }).compile();

    service = module.get<MediosPagosService>(MediosPagosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

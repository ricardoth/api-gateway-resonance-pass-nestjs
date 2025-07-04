import { Test, TestingModule } from '@nestjs/testing';
import { ComunasService } from './comunas.service';

describe('ComunasService', () => {
  let service: ComunasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComunasService],
    }).compile();

    service = module.get<ComunasService>(ComunasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

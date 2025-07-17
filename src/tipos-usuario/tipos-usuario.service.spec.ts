import { Test, TestingModule } from '@nestjs/testing';
import { TiposUsuarioService } from './tipos-usuario.service';

describe('TiposUsuarioService', () => {
  let service: TiposUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposUsuarioService],
    }).compile();

    service = module.get<TiposUsuarioService>(TiposUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

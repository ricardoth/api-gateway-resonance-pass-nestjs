import { Test, TestingModule } from '@nestjs/testing';
import { TiposUsuarioController } from './tipos-usuario.controller';
import { TiposUsuarioService } from './tipos-usuario.service';

describe('TiposUsuarioController', () => {
  let controller: TiposUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposUsuarioController],
      providers: [TiposUsuarioService],
    }).compile();

    controller = module.get<TiposUsuarioController>(TiposUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

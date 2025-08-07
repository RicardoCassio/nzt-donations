import { Test, TestingModule } from '@nestjs/testing';
import { SolicitationsController } from './solicitations.controller';
import { SolicitationsService } from './solicitations.service';

describe('SolicitationsController', () => {
  let controller: SolicitationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitationsController],
      providers: [SolicitationsService],
    }).compile();

    controller = module.get<SolicitationsController>(SolicitationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

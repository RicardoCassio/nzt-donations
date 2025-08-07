import { Test, TestingModule } from '@nestjs/testing';
import { SolicitationsService } from './solicitations.service';

describe('SolicitationsService', () => {
  let service: SolicitationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitationsService],
    }).compile();

    service = module.get<SolicitationsService>(SolicitationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

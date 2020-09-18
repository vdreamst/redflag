import { Test, TestingModule } from '@nestjs/testing';
import { ComService } from './com.service';

describe('ComService', () => {
  let service: ComService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComService],
    }).compile();

    service = module.get<ComService>(ComService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

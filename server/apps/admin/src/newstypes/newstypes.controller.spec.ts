import { Test, TestingModule } from '@nestjs/testing';
import { NewstypesController } from './newstypes.controller';

describe('NewstypesController', () => {
  let controller: NewstypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewstypesController],
    }).compile();

    controller = module.get<NewstypesController>(NewstypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ProducttypesController } from './producttypes.controller';

describe('ProducttypesController', () => {
  let controller: ProducttypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducttypesController],
    }).compile();

    controller = module.get<ProducttypesController>(ProducttypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

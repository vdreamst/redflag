import { Module } from '@nestjs/common';
import { ProducttypesController } from './producttypes.controller';

@Module({
  controllers: [ProducttypesController]
})
export class ProducttypesModule {}

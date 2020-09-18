import { Module } from '@nestjs/common';
import { SolutionsController } from './solutions.controller';

@Module({
  controllers: [SolutionsController]
})
export class SolutionsModule {}

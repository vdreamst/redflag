import { Module } from '@nestjs/common';
import { NewstypesController } from './newstypes.controller';

@Module({
  controllers: [NewstypesController]
})
export class NewstypesModule {}

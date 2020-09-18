import { Module } from '@nestjs/common';
import { ComService } from './com.service';
import {ConfigModule} from "@nestjs/config";
import {DbModule} from "@libs/db";
import { LibService } from './com/lib/lib.service';
@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal:true,

    }),
    DbModule
  ],
  providers: [ComService, LibService],
  exports: [ComService],
})
export class ComModule {}

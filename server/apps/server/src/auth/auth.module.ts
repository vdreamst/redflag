import { Module } from '@nestjs/common';
import {AuthCntroller} from './auth.controller';
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports:[
      PassportModule
  ],
  controllers: [AuthCntroller],
  providers:[LocalStrategy,JwtStrategy],
})
export class AuthModule {}

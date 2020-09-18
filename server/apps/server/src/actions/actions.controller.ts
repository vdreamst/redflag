import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Action } from '@libs/db/models/action.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';

@Controller('actions')
export class ActionsController {
  constructor(
    @InjectModel(Action)
    private readonly actionModel: ReturnModelType<typeof Action>,
  ) {}

  @Get('status')
  @UseGuards(AuthGuard('jwt'))
  async getStatus(@Query() dto, @Req() req) {
    //  await
    dto.user = req.user._id;
    const count = await this.actionModel.countDocuments(dto);
    return {
      status: count > 0,
    };
  }

  @Post('toggle')
  @UseGuards(AuthGuard('jwt'))
  async toggle(@Body() dto, @Req() req) {
    //  await
    console.log(req.user)
    const ret = await this.getStatus(dto, req);
    if (ret.status) {
      await this.actionModel.deleteMany(dto);
    } else {
      await this.actionModel.create(dto);
    }
    return await this.getStatus(dto, req);
  }
}

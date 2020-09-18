import {modelOptions, prop, Ref} from "@typegoose/typegoose";
import {ProductType} from "@libs/db/models/product.type.model";
import {ApiProperty} from "@nestjs/swagger";
//产品列表
@modelOptions({
  schemaOptions:{
    timestamps:true
  }
})
export class Product {
  @ApiProperty({description:"产品名称"})
  @prop()
  name: string;

  @ApiProperty({description:"产品类型"})
  @prop({ ref: 'ProductType' })
  type: string;

  @ApiProperty({description:"产品详情"})
  @prop()
  content:string;

  @ApiProperty({description:"前台显示"})
  @prop({enum:[true,false]})
  display:boolean;

  @ApiProperty({description:"允许点击"})
  @prop({enum:[true,false]})
  click:boolean;

  @ApiProperty({description:"推荐"})
  @prop({enum:[true,false]})
  recommend:boolean;


}
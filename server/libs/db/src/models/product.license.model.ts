import {modelOptions, prop, Ref} from "@typegoose/typegoose";
import {ProductType} from "@libs/db/models/product.type.model";
import {ApiProperty} from "@nestjs/swagger";
//产品列表
@modelOptions({
  schemaOptions:{
    timestamps:true
  }
})
export class ProductLicense {
  @ApiProperty({description:"产品名称"})
  @prop()
  name: string;
  @prop({ ref: 'ProductType' })
  type: string;
}
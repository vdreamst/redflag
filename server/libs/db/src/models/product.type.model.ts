import {arrayProp, modelOptions, prop, Ref} from "@typegoose/typegoose";
import {ApiProperty} from "@nestjs/swagger";
import {Product} from "@libs/db/models/product.model";
// 产品类型表
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class ProductType {
  @prop()
  name: string;

  @ApiProperty({ description: '是否前台展示' })
  @prop({
    enum: [true, false],
  })
  display: boolean;

  @arrayProp({
    ref: 'Product',
    localField: '_id',
    foreignField: 'type',
  })
  product: [string];
}
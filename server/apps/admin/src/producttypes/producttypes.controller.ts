import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ProductType } from '@libs/db/models/product.type.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
  model: ProductType,
  routes: {
    find: {
      sort: { _id: -1 },
    },
  },
})
@Controller('producttypes')
@ApiTags('产品类型')
export class ProducttypesController {
  constructor(
    @InjectModel(ProductType)
    private readonly model: ReturnModelType<typeof ProductType>,
  ) {}

  @Get('option')
  option() {
    return {
      title: '产品类型',

      column: [
        {
          prop: 'name',
          sortable: true,
          search: true,
          regex: true,
          label: '类型名称',
          row: true,
        },
        {
          prop: 'display',
          label: '数据展示',
          slot:true,
          row: true,
          sortable: true,
          search: true,
          type: 'radio',
          value: true,
          color: 'blue',
          dicData: [
            { label: '是', value: true ,type:"color",color:'red'},
            { label: '否', value: false },
          ],
        },
        // {prop: "cover", label: "课程封面"},
      ],
    };
  }
}

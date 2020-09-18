import {Controller, Get} from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {Product} from '@libs/db/models/product.model';
import {Crud} from 'nestjs-mongoose-crud';
import {ApiTags} from '@nestjs/swagger';
import {ReturnModelType} from "@typegoose/typegoose";
import {ProductType} from "@libs/db/models/product.type.model";

@Crud({
    model: Product,
    routes: {
        find: {
            sort: {_id: -1},
        },
    },
})
@Controller('products')
@ApiTags('产品管理')
export class ProductsController {
    constructor(
        @InjectModel(Product)
        private readonly model: ReturnModelType<typeof Product>,
        @InjectModel(ProductType)
        private readonly productTypeModel: ReturnModelType<typeof ProductType>,
    ) {
    }

    @Get('option')
    async option() {
        const types = (await this.productTypeModel.find()).map((v) => ({
            label: v.name,
            value: v._id,
        }));
        return {
            title: '产品列表',
            column: [
                {
                    prop: 'name',
                    label: '产品名称',
                    sortable: true,
                    search: true,
                    regex: true,
                    row: true
                },
                {
                    prop: 'type',
                    label: '产品类型',
                    search: true,
                    filterable:true,
                    sortable: true,
                    type: "select",
                    dicData: types,
                    row: true

                },
                {
                    prop: 'content',
                    type: 'ueditor',
                    label: '产品详情',
                    span:24,
                    row: true,
                    hide: true,
                    display: true,
                    options: {
                        action: 'upload',
                        oss: '',
                        props: {},
                        ali: {},
                        qiniu: {},
                    },
                },
                {
                    prop: 'display',
                    label: '前台展示',
                    slot:true,
                    row: true,
                    sortable: true,
                    search: true,
                    type: 'radio',
                    value: true,
                    dicData: [
                        { label: '是', value: true ,type:"color",color:'red'},
                        { label: '否', value: false },
                    ],
                },
                {
                    prop: 'click',
                    label: '跳转点击',
                    slot:true,
                    row: true,
                    search: true,
                    type: 'radio',
                    value: true,
                    dicData: [
                        { label: '是', value: true ,type:"color",color:'red'},
                        { label: '否', value: false },
                    ],
                },
                {
                    prop: 'recommend',
                    label: '推荐',
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

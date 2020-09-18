import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { News } from '@libs/db/models/news.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: News,
  routes: {
    find: {
      sort: { _id: -1 },
    },
  },
})
@Controller('news')
export class NewsController {
  constructor(
    @InjectModel(News) private readonly model: ReturnModelType<typeof News>,
  ) {}

  @Get('option')
  async option() {
    return {
      title: '新闻列表',
      column: [

        {
          prop: 'title',
          label: '新闻标题',
          sortable: true,
          search: true,
          regex: true,
          row: true,
        },
        {
          prop: 'type',
          label: '新闻类别',
          sortable: true,
          search: true,
          regex: true,
          row: true,
        },
        {
          prop: 'brief',
          label: '新闻简介',
          hide:true,
          type:"textarea",
          sortable: true,
          search: true,
          regex: true,
          row: true,
        },



        {
          prop: 'content',
          type: 'ueditor',
          label: '产品详情',
          span: 24,
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
          slot: true,
          row: true,
          sortable: true,
          search: true,
          type: 'radio',
          value: true,
          dicData: [
            { label: '是', value: true, type: 'color', color: 'red' },
            { label: '否', value: false },
          ],
        },
        {
          prop: 'click',
          label: '跳转点击',
          slot: true,
          row: true,
          search: true,
          type: 'radio',
          value: true,
          dicData: [
            { label: '是', value: true, type: 'color', color: 'red' },
            { label: '否', value: false },
          ],
        },
        {
          prop: 'recommend',
          label: '推荐',
          slot: true,
          row: true,
          sortable: true,
          search: true,
          type: 'radio',
          value: true,
          color: 'blue',
          dicData: [
            { label: '是', value: true, type: 'color', color: 'red' },
            { label: '否', value: false },
          ],
        },
      ],
    };
  }
}

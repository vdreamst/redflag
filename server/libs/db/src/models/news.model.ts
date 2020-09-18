import {ApiProperty} from "@nestjs/swagger";
import {modelOptions, prop} from "@typegoose/typegoose";
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class News{
    @ApiProperty({description:"新闻标题"}) @prop() title:string
    @ApiProperty({description:"新闻简介"}) @prop() brief:string
    @ApiProperty({description:"关键字"}) @prop() keyword:string

    @ApiProperty({description:"前台显示"})
    @prop({enum:[true,false]})
    display:boolean;

    @ApiProperty({description:"允许点击"})
    @prop({enum:[true,false]})
    click:boolean;

    @ApiProperty({description:"推荐"})
    @prop({enum:[true,false]})
    recommend:boolean;

    @ApiProperty({description:"新闻详情"}) @prop() content:string
}
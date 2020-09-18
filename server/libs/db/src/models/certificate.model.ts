import {ApiProperty} from "@nestjs/swagger";
import {modelOptions, prop} from "@typegoose/typegoose";
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Certificate{
    @ApiProperty({description:"证书名称"}) @prop() title:string
    @ApiProperty({description:"案例图片"}) @prop() thumb:string
}
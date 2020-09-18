import {ApiProperty} from "@nestjs/swagger";
import {modelOptions, prop} from "@typegoose/typegoose";
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Solution{
    @ApiProperty({description:"方案标题"})@prop() title:string
    @ApiProperty({description:"方案简介"})@prop() brief:string
    @ApiProperty({description:"方案图片"})@prop() thumb:string
    @ApiProperty({description:"技术栈"})@prop() stack:string
    @ApiProperty({description:"详情"})@prop() content:string
}
import {ApiProperty} from "@nestjs/swagger";
import {modelOptions, prop} from "@typegoose/typegoose";
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class CompatibilityHardware{
    @ApiProperty({description:"硬件兼容性"}) @prop() title:string
    @ApiProperty({description:"案例图片"}) @prop() thumb:string
}
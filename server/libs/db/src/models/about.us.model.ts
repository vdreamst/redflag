import {ApiProperty} from "@nestjs/swagger";
import {modelOptions, prop} from "@typegoose/typegoose";
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class AboutUs{
    @ApiProperty({description:"表"}) @prop() title:string
    @ApiProperty({description:"内容"}) @prop() content:string
}
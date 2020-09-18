import {ApiProperty} from "@nestjs/swagger";
import {modelOptions, prop} from "@typegoose/typegoose";
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class CertificateAuth{
    @ApiProperty({description:"姓名"}) @prop() title:string
    @ApiProperty({description:"证书类型"}) @prop() thumb:string
}
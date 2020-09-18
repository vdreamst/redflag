import {Global, Module} from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from "nestjs-typegoose"
import {User} from "@libs/db/models/user.model";
import {Product} from "@libs/db/models/product.model";
import {ProductType} from "@libs/db/models/product.type.model";
import {Solution} from "@libs/db/models/solution.model";
import {News} from "@libs/db/models/news.model";
import {Case} from "@libs/db/models/case.model";
import {Certificate} from "@libs/db/models/certificate.model";
import {CertificateAuth} from "@libs/db/models/certificate.auth.model";
import {CompatibilityHardware} from "@libs/db/models/compatibility.hardware.model";
import {CompatibilitySoftware} from "@libs/db/models/compatibility.software.model";
import {ProductLicense} from "@libs/db/models/product.license.model";
import {NewsType} from "@libs/db/models/news.type.model";

const models=TypegooseModule.forFeature([
    User,
    Product,
    ProductType,
    ProductLicense,
    Solution,
    News,
    NewsType,
    Case,
    Certificate,
    CertificateAuth,
    CompatibilityHardware,
    CompatibilitySoftware,
])
@Global()
@Module({
    imports:[
        TypegooseModule.forRootAsync({
           useFactory(){
                return {
                    uri:process.env.DB,
                    useNewUrlParser:true,
                    useUnifiedTopology:true,
                    useCreateIndex:true,
                    useFindAndModify:false
                }
           }
        }),
        models,
    ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}

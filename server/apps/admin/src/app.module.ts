import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from '@app/common';
import { MulterModule } from '@nestjs/platform-express';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProducttypesModule } from './producttypes/producttypes.module';
import { NewsModule } from './news/news.module';
import { SolutionsModule } from './solutions/solutions.module';
import { NewstypesModule } from './newstypes/newstypes.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    ProducttypesModule,
    NewsModule,

    CommonModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESS_KEY_ID,
              accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
              bucket: process.env.OSS_BUCKET,
            },
          }),
        };
      },
    }),
    SolutionsModule,
    NewstypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import {SwaggerModule,DocumentBuilder} from "@nestjs/swagger"
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()

  const options= new DocumentBuilder()
      .setTitle("全站之巅-后台管理API")
      .setDescription("供后台管理界面调用的API")
      .setVersion("1.0")
      .addTag("cats")
      .build()

  const document =SwaggerModule.createDocument(app,options)
  SwaggerModule.setup('api-docs', app, document);

  const PORT=process.env.ADMIN_PORT || 3001
  await app.listen(PORT);
  console.log(`启动ADMIN端口 http://localhost:${PORT}/api-docs`)
}
bootstrap();

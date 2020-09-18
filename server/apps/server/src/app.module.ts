import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import {CommonModule} from "@app/common";
import { SubjectModule } from './subject/subject.module';
import { SubjectsModule } from './subjects/subjects.module';
import { AuthModule } from './auth/auth.module';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [
      CommonModule,
      CoursesModule,
      SubjectModule,
      SubjectsModule,
      AuthModule,
      ActionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

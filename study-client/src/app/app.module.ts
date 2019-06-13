import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FileSelectDirective } from "ng2-file-upload";

import { AppComponent } from "./app.component";
import { StudentDashComponent } from "./student-dash/student-dash.component";
import { CourseComponent } from "./course/course.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { TeacherDashComponent } from "./teacher-dash/teacher-dash.component";
import { AppRouting } from "./app.routing";
import { ApiService } from "./shared/api.service";
import { TopicComponent } from './course/topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashComponent,
    CourseComponent,
    AddCourseComponent,
    FileSelectDirective,
    TeacherDashComponent,
    TopicComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRouting],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FileSelectDirective } from "ng2-file-upload";

import { AppComponent } from "./app.component";
import { StudentDashComponent } from "./student-dash/student-dash.component";
import { CourseComponent } from "./course/course.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { TeacherDashComponent } from "./teacher-dash/teacher-dash.component";
import { AppRouting } from "./app.routing";
import { ApiService } from "./shared/api.service";
import { TopicComponent } from "./course/topic/topic.component";
import { GroupComponent } from "./student-dash/group/group.component";
import { LoginComponent } from "./login/login.component";
import { DocSharingComponent } from "./student-dash/group/doc-sharing/doc-sharing.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentDashComponent,
    CourseComponent,
    AddCourseComponent,
    FileSelectDirective,
    TeacherDashComponent,
    TopicComponent,
    GroupComponent,
    LoginComponent,
    DocSharingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}

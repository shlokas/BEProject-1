import { Routes, RouterModule } from "@angular/router";
import { NgModule, Component } from "@angular/core";
import { AppComponent } from "./app.component";
import { TeacherDashComponent } from "./teacher-dash/teacher-dash.component";
import { StudentDashComponent } from "./student-dash/student-dash.component";
import { CourseComponent } from "./course/course.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { TopicComponent } from "./course/topic/topic.component";
import { GroupComponent } from "./student-dash/group/group.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },

  { path: "teacher/1", component: TeacherDashComponent },

  { path: "teacher/1/course_no", component: CourseComponent },
  { path: "teacher/1/add_course", component: AddCourseComponent },
  { path: "teacher/1/course_no/summary", component: TopicComponent },

  { path: "student/:sid", component: StudentDashComponent },
  { path: "student/:sid/group/:gid", component: GroupComponent },

  { path: "student/:sid/course_no", component: CourseComponent },
  { path: "student/:sid/course_no/summary", component: TopicComponent },

  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}

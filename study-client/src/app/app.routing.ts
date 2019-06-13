import { Routes, RouterModule } from "@angular/router";
import { NgModule, Component } from "@angular/core";
import { AppComponent } from "./app.component";
import { TeacherDashComponent } from "./teacher-dash/teacher-dash.component";
import { StudentDashComponent } from "./student-dash/student-dash.component";
import { CourseComponent } from "./course/course.component";
import { AddCourseComponent } from "./add-course/add-course.component";

const appRoutes: Routes = [
  { path: "teacher/1", component: TeacherDashComponent },

  { path: "teacher/1/course_no", component: CourseComponent },
  { path: "teacher/1/add_course", component: AddCourseComponent },

  { path: "student/2", component: StudentDashComponent },

  { path: "", redirectTo: "student/2", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}

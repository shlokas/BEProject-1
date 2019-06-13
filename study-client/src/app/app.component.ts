import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "study-client";

  isStudent = true;
  navLink = "teacher/1";
  navLinkStudent = "student/2";
  loggedIn = "Teacher";
  loggedInT = "Teacher";
  navLinkTeacher = "teacher/1";

  toggle() {
    this.isStudent = !this.isStudent;
    if (this.isStudent == false) {
      this.navLink = this.navLinkTeacher;
      this.loggedIn = "Teacher";
    } else {
      this.navLink = this.navLinkStudent;
      this.loggedIn = "Student";
    }
  }
}

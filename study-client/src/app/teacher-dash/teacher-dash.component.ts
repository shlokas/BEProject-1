import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-teacher-dash",
  templateUrl: "./teacher-dash.component.html",
  styleUrls: ["./teacher-dash.component.css"]
})
export class TeacherDashComponent implements OnInit {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {}

  addCourse() {
    this.router.navigate(["add_course"], {
      relativeTo: this.activeRoute
    });
  }

  openCourse() {
    this.router.navigate(["course_no"], {
      relativeTo: this.activeRoute
    });
  }
}

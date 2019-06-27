import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

const URL = "http://localhost:8080/summary/";

@Component({
  selector: "app-teacher-dash",
  templateUrl: "./teacher-dash.component.html",
  styleUrls: ["./teacher-dash.component.css"]
})
export class TeacherDashComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}
  Subjects: [];
  ngOnInit() {
    this.http.get(URL + "subjects").subscribe((res: any) => {
      console.log(res[0]);
      this.Subjects = res;
    });
  }

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

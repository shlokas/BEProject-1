import { Component, OnInit } from "@angular/core";
import { ApiService } from "../shared/api.service";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

const URL = "http://localhost:8080/summary/";

@Component({
  selector: "app-student-dash",
  templateUrl: "./student-dash.component.html",
  styleUrls: ["./student-dash.component.css"]
})
export class StudentDashComponent implements OnInit {
  Subjects?: [] = [];
  constructor(
    private apis: ApiService,
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.http.get(URL + "subjects").subscribe((res: any) => {
      console.log(res[0]);
      this.Subjects = res;
    });
    // console.log(this.Subjects);
  }
  openCourse() {
    this.router.navigate(["course_no"], {
      relativeTo: this.activeRoute
    });
  }
}

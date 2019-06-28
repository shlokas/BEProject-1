import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../shared/api.service";
import { Router, ActivatedRoute } from "@angular/router";

const URL = "http://localhost:8080/summary/";
export let Summaries = [];
@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private apis: ApiService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}
  summaries = [];
  ngOnInit() {
    this.http
      .post(URL + "all", { subject: "Software Engineering" })
      .subscribe((res: any) => {
        Summaries = res;
        this.summaries = res;
        console.log(Summaries);
      });
  }

  sortAccounts(arr, prop: number) {
    const sorted = arr.sort((a, b) =>
      a[prop] > b[prop] ? -1 : a[prop] === b[prop] ? 0 : 1
    );
    // asc/desc
    // if (prop.charAt(0) === "-") {
    //   sorted.reverse();
    // }
    return sorted;
  }

  openSummary(top, book, quest) {
    // this.apis.summ.emit(book);
    this.apis.book = book;
    this.apis.topic = top;
    this.apis.questions = quest;
    this.router.navigate(["summary"], { relativeTo: this.actRoute });
  }
}

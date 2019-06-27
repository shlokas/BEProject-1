import { Component, OnInit, ɵConsole } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { loggedInUser } from "src/app/login/login.component";

const URL = "http://localhost:8080/";

@Component({
  selector: "app-group",
  templateUrl: "./group.component.html",
  styleUrls: ["./group.component.css"]
})
export class GroupComponent implements OnInit {
  Posts?: [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe((param: Params) => {
      this.grpId = param["gid"];
      console.log(this.grpId);
    });

    this.http
      .post(URL + "groups/getPosts", { groupID: this.grpId })
      .subscribe((res: any) => {
        console.log("Posts in a group");
        console.log(res);
        this.Posts = res;
      });
  }

  grpId: any;

  ngOnInit() {}

  addNewAnswer(form: NgForm, id: any) {
    console.log(id);
    console.log(form.value.answer);
    this.http
      .post(URL + "groups/addAnswer", {
        questionID: id,
        answer: form.value.answer
      })
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  addNewPost(form: NgForm) {
    console.log(form.value.question);
    this.http
      .post(URL + "groups/addPost", {
        groupID: this.grpId,
        question: form.value.question,
        author: loggedInUser._id
      })
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}

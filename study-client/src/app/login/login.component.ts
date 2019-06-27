import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { userInfo } from "os";

const URL = "http://localhost:8080/";

export let loggedInUser = {
  _id: "5d130a8b1c9d440000d3d570",
  name: "Mihir Deodhar",
  username: "mihir"
};

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  loggingIn(form: NgForm) {
    console.log(form);
    this.http
      .post(URL + "user/userID", { username: form.value.username })
      .subscribe((res: any) => {
        console.log(res);

        loggedInUser = res;
        this.router.navigate(["student", res._id]);
      });
  }
}

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../shared/api.service";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { loggedInUser } from "../login/login.component";

const URL = "http://localhost:8080/";

@Component({
  selector: "app-student-dash",
  templateUrl: "./student-dash.component.html",
  styleUrls: ["./student-dash.component.css"]
})
export class StudentDashComponent implements OnInit {
  Subjects;
  isCreateAGroup: boolean = false;
  listOfUsers;
  listOfMembers: string = "";
  listOfGroup;
  constructor(
    private apis: ApiService,
    private http: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.http.get(URL + "summary/subjects").subscribe((res: any) => {
      console.log(res);
      this.Subjects = res;
    });

    this.http.get(URL + "groups/users").subscribe((res: any) => {
      console.log(res);
      this.listOfUsers = res;
    });

    this.http
      .post(URL + "groups/getGroups", { userID: loggedInUser._id })
      .subscribe((res: any) => {
        console.log(loggedInUser._id);
        this.listOfGroup = res;
        console.log(this.listOfGroup);
      });

    // console.log(this.Subjects);
  }
  openCourse() {
    this.router.navigate(["course_no"], {
      relativeTo: this.activeRoute
    });
  }

  createGroup() {
    this.isCreateAGroup = !this.isCreateAGroup;
  }

  submitGroupCreation(form: NgForm) {
    console.log(form);
    this.listOfMembers = "";
    Object.keys(form.value.members).forEach(e => {
      // console.log(`key=${e}  value=${form.value.members[e]}`);
      if (form.value.members[e] == true) {
        this.listOfMembers += e + ",";
        console.log(this.listOfMembers);
        // post this.listOfMembers for members
        // add own name in user list
      }
    });
    this.listOfMembers += loggedInUser._id;
    this.http
      .post(URL + "groups/createGroup", {
        admin: loggedInUser._id,
        name: form.value.groupName,
        members: this.listOfMembers
      })
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  openGroup(gid: any) {
    this.router.navigate(["group", gid], {
      relativeTo: this.activeRoute
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  FileUploader,
  FileSelectDirective
} from "ng2-file-upload/ng2-file-upload";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

const URL = "upload api";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.css"]
})
export class AddCourseComponent implements OnInit {
  // uploadedFiles: Array<File>;
  filesToUpload: Array<File> = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  // TRIAL 1

  // fileChange(element) {
  //   this.uploadedFiles = element.target.files;
  // }

  // upload() {
  //   let formData = new FormData();
  //   for (var i = 0; i < this.uploadedFiles.length; i++) {
  //     formData.append(
  //       "uploads[]",
  //       this.uploadedFiles[i],
  //       this.uploadedFiles[i].name
  //     );
  //   }
  //   this.http.post("/api/upload", formData).subscribe(response => {
  //     console.log("response received is ", response);
  //   });
  // }

  // TRIAL 2

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]["name"]);
    }
    // console.log("form data variable :   " + formData.toString());
    // console.log(formData);
    this.http
      .post("http://localhost:3003/upload", formData)
      .map(files => files)
      .subscribe(files => console.log("files", files));
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }
}

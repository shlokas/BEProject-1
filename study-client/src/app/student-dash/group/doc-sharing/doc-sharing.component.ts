import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";

@Component({
  selector: "app-doc-sharing",
  templateUrl: "./doc-sharing.component.html",
  styleUrls: ["./doc-sharing.component.css"]
})
export class DocSharingComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  files = [];

  @ViewChild("fileInput") fileInput: ElementRef;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      console.log(reader.result);
      // const temp = reader.result;
      // (temp as string).split(",");
      reader.onload = () => {
        this.form.get("avatar").setValue({
          filename: file.name,
          filetype: file.type,
          value: (reader.result as string).split(",")[1]
        });
      };
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    console.log(formModel);
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    this.files.push({ filename: formModel.name, file: formModel.avatar.value });
    setTimeout(() => {
      console.log(formModel);
      alert("done!");
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.form.get("avatar").setValue(null);
    this.fileInput.nativeElement.value = "";
  }

  showPdf(link: string) {
    const linkSource = "data:application/pdf;base64," + link;
    const downloadLink = document.createElement("a");
    const fileName = this.form.value.avatar.filename;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  ngOnInit() {}
}

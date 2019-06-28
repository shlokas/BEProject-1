import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/shared/api.service";

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.css"]
})
export class TopicComponent implements OnInit {
  constructor(private apiserv: ApiService) {}

  book: any = [];
  topic: any;
  quest: any;
  ngOnInit() {
    this.book = this.apiserv.book;
    this.topic = this.apiserv.topic;
    this.quest = this.apiserv.questions;
    console.log(this.book);
  }
}

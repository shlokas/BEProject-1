import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const URL = "http://localhost:8080/summary/";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSubjects() {
    return this.http.get(URL + "subjects").map(res => console.log(res));
  }
}

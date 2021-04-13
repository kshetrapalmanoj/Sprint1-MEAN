import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Developer } from "./developer.model";

@Injectable()
export class DeveloperService {
  selectedDeveloper: Developer;
  developers: Developer[];
  readonly baseURL = "http://localhost:3000/developers";

  constructor(private http: HttpClient) {}

  postDeveloper(dev: Developer) {
    return this.http.post(this.baseURL, dev);
  }

  getDeveloperList() {
    return this.http.get(this.baseURL);
  }

  putDeveloper(dev: Developer) {
    return this.http.put(this.baseURL + `/${dev._id}`, dev);
  }

  deleteDeveloper(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}

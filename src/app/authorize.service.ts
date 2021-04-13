import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Developer } from './shared/developer.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private http:HttpClient) { }
  getAuthToken(name,pwd)
  {

    return this.http.post('http://localhost:3000/developers',{"name":name,"pwd":pwd})
  .toPromise()
  .then(function(res:Response) {
    return res.json();
  })
  .catch((err)=>{
    console.log(err)
  })
  }
}

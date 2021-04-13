import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
 providedIn: 'root'
})
export class JwtService {

 constructor(private http: HttpClient) { }
 httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

 login(email: string, password: string): Observable<any>{
 return this.http.post<any>('http://localhost:3000/developers/login', {email, password}, this.httpOptions)

 }

 logout() {
 localStorage.removeItem('access_token');
 }

 public get loggedIn(): boolean {
 return localStorage.getItem('access_token') !== null;
 }
}

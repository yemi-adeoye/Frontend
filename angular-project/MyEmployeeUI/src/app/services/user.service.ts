import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Employee } from "../models/employee.model";
import { UserInfo } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService{

  user$ = new BehaviorSubject<UserInfo[]>([]);
  name$ = new BehaviorSubject<string>('');
  employee$ = new BehaviorSubject<Employee>({});

  constructor(private http: HttpClient){}

  getAllUsers() : Observable<UserInfo[]>{
     return this.http.get<UserInfo[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(userId: number) : Observable<UserInfo> {
     return this.http.get<UserInfo>('https://jsonplaceholder.typicode.com/users/'+ userId);
  }


  getEmployee(): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0N2ZjZDZiNGIyZjM1NjUzNzAzNTIwIn0sImlhdCI6MTY2NTY2MzQxNSwiZXhwIjoxNjY1Njk5NDE1fQ.Svt6BTIztPoMURL73uIljP8jHmz6Z4mVTl8599l03Ag' })
    };


      return this.http.get('localhost:5000' ,httpOptions);
  }
}

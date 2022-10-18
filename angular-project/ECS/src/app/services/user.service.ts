import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { Login } from '../models/login.model';
import { UserInfo } from '../models/user.model';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public login(login: Login):Observable<string>{
    return this.http.post<string>(environment.serverUrl + '/auth/login',login );
  }

  getUser(token: string) : Observable<UserInfo>{
    let user: UserInfo={
      name: 'harry potter',
      email: 'harry@gmail.com',
      jobTitle: 'Developer',
      managerName: 'Albus Dumbledore',
      role: 'MANAGER'
    }
     return Observable.create(observer=>{
        observer.next(user);
        observer.complete();
     });
  }

  signUp(employee: Employee) {
    return Observable.create(observer=>{
      observer.next('');
      observer.complete();
   });
  }

}

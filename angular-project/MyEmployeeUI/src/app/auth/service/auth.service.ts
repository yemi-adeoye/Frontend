import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    console.log(token);

    if(token == undefined || token == null)
      return false;

    //call the API, pass the token and fetch user details.

    //role == 'USER'

    return true;
  }


}

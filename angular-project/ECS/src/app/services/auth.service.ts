import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService, private router: Router) { }

  isloggedIn(): boolean {
    /* 1. Is the token available in local storage */
    let token = localStorage.getItem('token');
    let status = false;
    if(!token)
         this.router.navigateByUrl('/');
    if(token){
      /* 2. Is the token valid at this instance? */
      this.userService.getUser(token).subscribe({
        next: (data)=>{
            status = true;
        },
        error: (err)=>{
          //token invalid or expired 401
          status=false;
        }
      });
    }

    return status;
  }
}

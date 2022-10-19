import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login;
  msg: string;
  constructor(private userService: UserService, private router:Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    /* read the token from ls
    call the api /user: token */
    this.loginForm=new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.userService.msg$.subscribe(val=>{
      this.msg = val;
    });
  }

  onFormSubmit(){
     this.login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
     };

     /* Call login API */
     this.userService.login(this.login).subscribe({
      next: (data)=>{
          localStorage.setItem('token',data);
          /* Update the subject(status$): true  */
          this.authService.status$.next(true);
          this.router.navigateByUrl('/home');
        },
      error: (error)=>{
          this.msg = error.error.msg;
      }
     });
  }
}
/*
data=>{
  localStorage.setItem('token',data);
  this.router.navigateByUrl('/home');
}

*/

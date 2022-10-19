import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { CalcComponent } from './components/calc/calc.component';
import { ArrayOpsComponent } from './components/array-ops/array-ops.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PostComponent } from './components/post/post.component';
import { PostStatComponent } from './components/post-stat/post-stat.component';
import { UserStatComponent } from './components/user-stat/user-stat.component';
import { TodoStatComponent } from './components/todo-stat/todo-stat.component';
import { HttpClientModule} from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    CalcComponent,
    ArrayOpsComponent,
    EmployeeComponent,
    PostComponent,
    PostStatComponent,
    UserStatComponent,
    TodoStatComponent,
    TodoComponent,
    UsersComponent,
    HomeComponent,
    CommentsComponent,
    UserComponent,
    NavbarComponent,
    PostAddComponent,
    PostEditComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

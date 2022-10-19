import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/service/auth-guard.service';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomeComponent } from './components/home/home.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostComponent } from './components/post/post.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'posts', component: PostComponent, canActivate: [AuthGuardService]},
  {path: 'users', component: UsersComponent},
  {path: 'todos', component: TodoComponent},
  {path: 'comments/:id', component: CommentsComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'post/add', component: PostAddComponent},
  {path: 'post/edit/:id' , component: PostEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

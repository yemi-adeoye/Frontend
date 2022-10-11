import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    TodoStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

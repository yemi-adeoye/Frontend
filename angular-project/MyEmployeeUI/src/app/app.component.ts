import { Component } from '@angular/core';
import { Employee } from './models/employee.model';
import { employees } from './data/data';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private users: UserService){
        this.users.getEmployee().subscribe(data=>{
          console.log(data);
        })
    }
}

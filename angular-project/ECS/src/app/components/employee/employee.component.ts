import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { Leave } from 'src/app/models/leave.model';
import { Ticket } from 'src/app/models/ticket.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';
import { priority } from '../../data/data'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee;

  priority: string[]= priority;
  msg: string = '';
  ticket: Ticket;
  leaveForm: FormGroup;
  leave: Leave;
  leaveMsg: string='';
  leaveArry: Leave[];
  leaveErrorMsg:string='';
  constructor(private userService: UserService,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.leaveForm = new FormGroup({
      from : new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      numDays: new FormControl('', Validators.required)
    });

    this.userService.getUser(localStorage.getItem('token')).subscribe({
      next: (data)=>{
          this.employee={
            email: data.email,
            name: data.name,
            jobTitle: data.jobTitle,
            imageUrl: data.imageUrl,
            managerName: data.managerName,
            role: data.role
          };

          if( !(this.employee.role == 'EMPLOYEE') )
                  this.router.navigateByUrl('/');
      },
      error: (err)=>{
        this.router.navigateByUrl("/");
      }
    });

    this.employeeService.getAllLeaves(new Date().getFullYear()).subscribe({
      next: (data)=>{
        this.leaveArry = data;
      },
      error: (err)=>{
          this.leaveErrorMsg='COuld not load leave records at this moment';
      }
    });
  }



  onApplyLeave(){
      this.leave = {
        to: this.leaveForm.value.to,
        from: this.leaveForm.value.from,
        email: this.employee.email,
        year: new Date().getFullYear(),
        numDays: this.leaveForm.value.numDays,
        status: 'PENDING'
      };

      this.employeeService.applyLeave(this.leave).subscribe({
        next: (data)=>{
          this.leave = data;
          this.leaveMsg='Leave applied successfully';
          this.leaveArry.push(this.leave);
        },
        error: (err)=>{
          this.leaveMsg='Could not apply leave, please try later'
        }
      });
  }
}

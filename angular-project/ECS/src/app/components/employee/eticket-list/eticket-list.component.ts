import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-eticket-list',
  templateUrl: './eticket-list.component.html',
  styleUrls: ['./eticket-list.component.css']
})
export class EticketListComponent implements OnInit {

  tickets: Ticket[]=[];

  constructor(private userService: UserService,private router: Router,
    private employeeService: EmployeeService) { }


  ngOnInit(): void {
    this.employeeService.fetchTickets('OPEN').subscribe({
      next: (data)=>{
          this.tickets = data;
      },
      error: (error)=>{}
    })
  }

}

import { Component } from '@angular/core';
import { Employee } from './models/employee.model';
import { employees } from './data/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x:number=20;
  y:number=10;
  msg:string; //undefined
  result:number;
  employee1:Employee;
  employee2:Employee;
  employee3:Employee;
  employees:Employee[];
  city:string='';
  tempEmployees:Employee[];

  constructor(){
    this.employees=employees;
    this.tempEmployees = employees;
  }

  nums:number[]=[5,8,2,7,1,6,9,3];
  tempNums:number[] = [5,8,2,7,1,6,9,3];

  sortAsc(){
    this.nums = this.nums.sort((a,b)=>a-b);
  }

  sortDesc(){
    this.nums = this.nums.sort((a,b)=>b-a);
  }

  filterEven(){
    this.reset();
    this.nums = this.nums.filter(n=>n%2 == 0);
  }

  filterOdd(){
    this.reset();
    this.nums = this.nums.filter(n=>n%2 == 1);
  }

  reset(){
    this.nums = this.tempNums;
  }
  welcomeFunc(){
    this.msg='Hey Welcome to angular';
  }

  taskFunc(){
    this.msg="work with typescript";
  }

  calc(op:string){
    switch(op){
      case 'add':
        this.result=this.x+this.y;
        break;
      case 'sub':
        this.result=this.x-this.y;
        break;
    }
  }

  filterEmployee(){
    this.employees = this.tempEmployees;
    if( !(this.city == '' || this.city == undefined) ){
      this.employees = this.employees
              .filter(e=>e.city === this.city);
    }
  }

}

/*
  number,string,boolean
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Leave } from '../models/leave.model';
import { Ticket } from '../models/ticket.model';
import {leaves} from '../data/data'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  leave$ = new BehaviorSubject<Leave[]>([]);

  constructor() { }

  postTicket(ticket: Ticket) : Observable<Ticket>{
    return Observable.create(observer=>{
      ticket.id=1234;
      observer.next(ticket);
      observer.complete();
   });
  }

  applyLeave(leave: Leave) : Observable<Leave> {
    return Observable.create(observer=>{
      leave.id=Math.round(Math.random()*100);
      leave.status ='PENDING';
      observer.next(leave);
      observer.complete();
   });
  }

  getAllLeaves(year: number): Observable<Leave[]> {
    return Observable.create(observer=>{
      observer.next(leaves);
      observer.complete();
   });
  }

}

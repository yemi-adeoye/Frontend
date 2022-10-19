import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Leave } from '../models/leave.model';
import { Ticket } from '../models/ticket.model';
import {leaves} from '../data/data'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  leave$ = new BehaviorSubject<Leave[]>([]);

  constructor(private http: HttpClient) { }

  public postTicket(ticket: Ticket) : Observable<Ticket>{
      const header = {'x-auth-token' : localStorage.getItem('token')}
      return this.http.post<Ticket>(environment.serverUrl + '/ticket/add' , ticket, {headers: header});
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

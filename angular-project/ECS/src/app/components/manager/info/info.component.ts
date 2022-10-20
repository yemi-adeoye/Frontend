import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/models/user.model';

@Component({
  selector: 'app-manager-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class ManagerInfoComponent implements OnInit {

  @Input("manager")
  manager: UserInfo;

  constructor() { }

  ngOnInit(): void {
  }

}

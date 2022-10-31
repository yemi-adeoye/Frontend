import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
     { path: '/employee', title: 'User Dashboard',  icon:'person', class: '' },
    { path: '/employee/ticket', title: 'Generate Ticket',  icon:'content_paste', class: '' },
    { path: '/employee/leave', title: 'Apply Leave',  icon:'library_books', class: '' },
    { path: '/employee/leave-list', title: 'Leave Records',  icon:'bubble_chart', class: '' },
    { path: '/employee/ticket-list', title: 'Ticket Records',  icon:'content_paste', class: '' },
     { path: '/logout', title: 'Logout',  icon:'unarchive', class: 'active-pro' },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}

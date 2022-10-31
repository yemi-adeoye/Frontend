import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './components/employee/info/info.component';
import { TicketComponent } from './components/employee/ticket/ticket.component';
import { LeaveComponent } from './components/employee/leave/leave.component';
import { ListComponent } from './components/employee/list/list.component';
import {  ManagerAccessComponent } from './components/manager/access/access.component';
import { ManagerLeavesComponent } from './components/manager/leaves/leaves.component';
import { ManagerInfoComponent } from './components/manager/info/info.component';
import { ManagerTicketComponent } from './components/manager/ticket/ticket.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EdashboardComponent } from './components/employee/edashboard/edashboard.component';
import { EprofileComponent } from './components/employee/eprofile/eprofile.component';
 @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    EmployeeComponent,
    ManagerComponent,
    PageNotFoundComponent,
    InfoComponent,
    TicketComponent,
    LeaveComponent,
    ListComponent,
    ManagerAccessComponent,
    ManagerLeavesComponent,
    ManagerInfoComponent,
    ManagerTicketComponent,
    AdminDashboardComponent,
    SidebarComponent,
    NavbarComponent,
    EdashboardComponent,
    EprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

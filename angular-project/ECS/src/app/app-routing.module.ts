import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { EdashboardComponent } from './components/employee/edashboard/edashboard.component';
import { EleaveListComponent } from './components/employee/eleave-list/eleave-list.component';
import { EleaveComponent } from './components/employee/eleave/eleave.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EprofileComponent } from './components/employee/eprofile/eprofile.component';
import { EticketListComponent } from './components/employee/eticket-list/eticket-list.component';
import { EticketComponent } from './components/employee/eticket/eticket.component';
import { HomeComponent } from './components/home/home.component';
import { ManagerComponent } from './components/manager/manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full' },
  //{path: '', component: AdminDashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'sign-up', component: SignUpComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'employee',component: EdashboardComponent, canActivate: [AuthGuardService]
  , children:[
    {path: '', component: EprofileComponent},
    {path: 'ticket', component: EticketComponent},
    {path: 'leave', component: EleaveComponent},
    {path: 'ticket-list', component: EticketListComponent},
    {path: 'leave-list', component: EleaveListComponent},
  ]},
  //{path: 'employee',component: EmployeeComponent, canActivate: [AuthGuardService]},
  {path:'manager', component: ManagerComponent, canActivate: [AuthGuardService]},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

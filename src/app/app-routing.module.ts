import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { StatedataComponent } from './statedata/statedata.component'
import { AuthGuard } from './auth.guard'
const routes: Routes = [
  {
    path:"",
    component:MainComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path:"state/:id",
    component:StatedataComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

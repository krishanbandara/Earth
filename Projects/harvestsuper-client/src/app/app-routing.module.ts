import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./view/module/employee/employee.component";
import {MainwindowComponent} from "./view/mainwindow/mainwindow.component";

const routes: Routes = [
  {path:"main",component:MainwindowComponent},

  {
    path: "main",
    component: MainwindowComponent,
    children: [{path: "employee", component: EmployeeComponent},]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

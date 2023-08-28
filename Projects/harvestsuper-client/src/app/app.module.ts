import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { EmployeeComponent } from './view/module/employee/employee.component';
import {MainwindowComponent} from "./view/mainwindow/mainwindow.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridList, MatGridListModule} from "@angular/material/grid-list";
import {MatCard, MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MainwindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

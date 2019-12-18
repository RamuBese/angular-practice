import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {employeecomponent} from './Employee/employee.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, employeecomponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

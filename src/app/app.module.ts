import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import  appRoutes  from './app.routes';
import { SimpleFormComponentComponent } from './simple-form-component/simple-form-component.component';
import {DataServiceService} from "./data-service.service";


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

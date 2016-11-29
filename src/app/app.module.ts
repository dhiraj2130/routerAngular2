import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import  appRoutes  from './app.routes';
import { SimpleFormComponentComponent } from './simple-form-component/simple-form-component.component';
import {DataServiceService} from "./data-service.service";
import { StoreModule } from '@ngrx/Store';
import { items, selectedItem, ItemsService } from './reducers';
import { people } from './people';



@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes,
    StoreModule.provideStore({people, items, selectedItem }) //The provideStore is appropriately named in that it provides us with an
    // application store to use for the life-cycle of the application.
  ],
  providers: [DataServiceService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

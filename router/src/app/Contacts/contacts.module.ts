/**
 * Created by dhiraj.kumar on 24/11/2016.
 */
import { NgModule } from "@angular/core";
import contactsroutes from "./contacts.routes";
import  { CommonModule} from '@angular/common';
import { ContactsComponent } from './contacts.component'
import {ContactComponent} from "../Contact/contact.component";


@NgModule({
    imports:[CommonModule, contactsroutes],
    declarations:[ContactsComponent,ContactComponent]

})
export default class ContactsModule{}









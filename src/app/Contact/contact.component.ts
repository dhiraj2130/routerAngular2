/**
 * Created by dhiraj.kumar on 24/11/2016.
 */
import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/map";
@Component({
    template:` I am  first component
  contact {{ id | async }}`
})
export class ContactComponent{
    id;
    constructor(private  route:ActivatedRoute){
       this.id = route.params.map((p:any) => p.id);
    }
}

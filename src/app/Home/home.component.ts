/**
 * Created by dhiraj.kumar on 21/11/2016.
 */
    import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/interval.js';
import 'rxjs/add/operator/map.js';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

import { Subject } from "rxjs/Subject";
import { Store } from '@ngrx/Store';
import 'rxjs/add/observable/interval.js';
import 'rxjs/add/operator/mapTo';
//import 'SECOND' from './clock_reducers';

@Component({
    template:` I am component one
 <input #inputNum type="number" value=""0">
 <button (click)="click$.next(inputNum)">update clock </button>
 <h1>clock : {{ clock | async }}</h1>
    <h1>store clock : {{ storeclock | async }}</h1>`
})
export class HomeComponent{
    click$ = new Subject();
    clock;
    storeclock;

    constructor(private store:Store<any>){
        this.storeclock = store.select('clock');

        Observable.interval(1000).mapTo('second')
            .subscribe((type) =>{
                store.dispatch({type});
            });


        this.clock =   Observable.merge(
        this.click$,
        Observable.interval(1000)
        ).map(() => new Date());



    //this.clock = this.click$.map(() => new Date());
    }
   // clock = Observable.interval(1000).map(() => new Date());
}
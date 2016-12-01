import { Component } from '@angular/core';
import {DataServiceService} from "./data-service.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/interval.js';
import 'rxjs/add/operator/map.js';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

import { Subject } from "rxjs/Subject"
import { Store } from '@ngrx/Store';

import { ItemsService, AppStore } from './reducers';

import { Item } from './models/items.model';

import { people } from './people';

//http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click$ = new Subject();
  clock;
    public people;

  //
  // clock = Observable
  //     .interval(1000)
  //     .map(() => new Date())
  //     ;



  title = 'app works!';
    private id=0;
  _dataService:DataServiceService;

  onHello(id,text){
    this._dataService.update(id,text);
  }

    addPerson(name){
        this._store.dispatch(({type:"add_person",payload:{
            id: ++this.id,
            name,
            guests:0,
            attending:false
        }}))
    }


    items: Observable<Array<Item>>;
    selectedItem : Observable<Item>;

  constructor(dataService:DataServiceService,private _store: Store<any>,
              private itemsService : ItemsService, private store: Store<AppStore>){


   this.items = itemsService.items;
       // this.selectedItem = store.select('selectedItem');
      this.selectedItem = store.map(state => state['selectedItem']);

      _store.select('people')
          .subscribe(people => {
              this.people = people;
          })
    this.clock = Observable.merge(
        this.click$,
        Observable.interval(1000)
    )//.map(() => new Date());
        .startWith(new Date())
        .scan((acc,curr) => {
          const date = new Date();
date.setSeconds(date.getSeconds() + 1);
          return date;
        });



//this.clock = this.click$.map(() => new Date());

   // this.clock.subscribe(console.log.bind(console));
    this._dataService = dataService;
  }


//     constructor(private itemsService : ItemsService, private store: Store<AppStore>){
// this.items = itemsService.items;
//         this.selectedItem = store.select('selectedItem');
//     };

}


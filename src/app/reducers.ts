//http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/
import {Observable} from "rxjs/Rx";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/Store';
import { Item } from './models/items.model';
export const items = (state: any =[{
    id: 10000,

}],{type,payload}) =>{
    switch(type){
        default:
            return state;
    }
}

export const selectedItem =(state :any =null, {type,payload}) => {
    switch(type){
        default:
            return state;
    }
}

export interface AppStore{
    items:Item[];
    selectedItem:Item;
}

@Injectable()
export class ItemsService {
    items: Observable<Array<Item>>;
    constructor(private store: Store<AppStore>){
      // this.items = store.select('items');
       this.items = store.map(state => state['items']);
    }
}

// export class App{
//     items: Observable<Array<Item>>;
//     selectedItem : Observable<Item>;
//     constructor(private itemsService : ItemsService, private store: Store<AppStore>){
// this.items = itemsService.items;
//         this.selectedItem = store.select('selectedItem');
//     };
// }
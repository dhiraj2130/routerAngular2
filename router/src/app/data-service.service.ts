import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  constructor() { }

  messages = [
      { id:1,text:"message1"},
      { id:2,text:"message2"},
      { id:3,text:"message3"}
  ];

  update(id,text){
    this.messages = this.messages.map( m =>
      m.id === id ? {id,text} : m
    )
  }
}

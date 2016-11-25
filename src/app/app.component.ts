import { Component } from '@angular/core';
import {DataServiceService} from "./data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  _dataService:DataServiceService;
  onHello(id,text){
    this._dataService.update(id,text);
  }

  constructor(dataService:DataServiceService){
    this._dataService = dataService;
  }

}

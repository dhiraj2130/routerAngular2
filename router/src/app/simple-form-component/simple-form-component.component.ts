import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form-component',
  templateUrl: './simple-form-component.component.html',
  styleUrls: ['./simple-form-component.component.css']
})
export class SimpleFormComponentComponent implements OnInit {

  constructor() { }
@Input() inputText;

  ngOnInit() {
  }
@Output() update = new EventEmitter();



}

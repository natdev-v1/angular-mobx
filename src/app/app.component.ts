import { Component } from '@angular/core';
import { contactStore } from './stores/CountStore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mobx';
  store = contactStore;
  constructor(){
  }
}

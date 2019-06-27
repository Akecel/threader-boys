import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  story:any 
  display:any;

  constructor() {}

  thread() {
    this.display = new Array(Math.ceil(this.story.length / 270));
  }
}

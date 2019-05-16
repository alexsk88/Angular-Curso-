import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  date = new Date();
  year: any;

  constructor() {
    this.year  = this.date.getFullYear();
   }

  ngOnInit() {
  }

}

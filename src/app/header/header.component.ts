import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title;
  constructor() { }

  ngOnInit() {
    this.title = 'Angular2 Client Starter';
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ApiService]
})
export class ListComponent implements OnInit {

  contents;
  newContent = {
    name: ''
  };

  constructor(private api: ApiService,private router: Router) {}

  ngOnInit() {
    this.get();
  }

  clearView() {
    this.contents = [];
  }

  view(doc) {
    this.router.navigate(['/view', doc.name]);
  }

  get() {
    var success, fail, complete;

    this.clearView();

    success = function(collection) {
      console.log(collection);
      this.contents = collection;
    }.bind(this);

    fail = function() {
      console.log('fail');
    }.bind(this);

    complete = function() {
      console.log('done');
    }.bind(this);

    console.log('calling get..');
    this.api.get('content').subscribe(success, fail, complete);
  }

  create() {
    var success, fail, complete;

    success = function(collection) {
      this.router.navigate(['/view', collection.name]);
    }.bind(this);

    fail = function() {
      console.log('fail');
    }.bind(this);

    complete = function() {
      console.log('done');
    }.bind(this);

    this.api.create('content', this.newContent).subscribe(success, fail, complete);
  }

  remove(doc) {
    var success, fail, complete;

    success = function(collection) {
      this.get();
    }.bind(this);

    fail = function() {
      console.log('fail');
    }.bind(this);

    complete = function() {
      console.log('done');
    }.bind(this);

    console.log('calling remove.. : ' +  doc.name);

    this.api.remove('content', doc).subscribe(success, fail, complete);
  }

}


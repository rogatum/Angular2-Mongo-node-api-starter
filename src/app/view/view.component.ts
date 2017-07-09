import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [ApiService]
})
export class ViewComponent implements OnInit, OnDestroy {
  
  viewName;
  view: any;
  ready;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService) {}

  ngOnInit() {
    this.viewName = this.route.snapshot.params['name'];
    if(this.viewName) { this.get(); }
  }

  ngOnDestroy() { 
    this.viewName = '';
    this.clearView()
  }

  clearView() {
    this.view = [];
    this.ready = false;
  }

  setView(view) {
    this.view = view[0];
    this.ready = true;
  }

  get() {
    var success, fail, complete;
    success = function(view) {
      this.clearView();
      if(view[0]) { this.setView(view); }
    }.bind(this);

    fail = function() {
      console.log('fail');
    }.bind(this);

    complete = function() {
      console.log('done');
    }.bind(this);

    console.log('calling get..');
    var _viewNameQuery = this.viewName.substring(0,this.viewName.length -1);
    this.ready = false;
    this.api.get('content/search/' + _viewNameQuery).subscribe(success, fail, complete);
  }

  update() {
    var success, fail, complete;

    success = function(collection) {
      console.log(collection);
      this.get();
    }.bind(this);

    fail = function() {
      console.log('fail');
    }.bind(this);

    complete = function() {
      console.log('done');
    }.bind(this);

    this.api.update('content', this.view).subscribe(success, fail, complete);
  }
}

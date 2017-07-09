import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private api = 'http://localhost:3000/';

  constructor(private http: Http) {}

  get(collection) {
    return this.http.get(this.api + collection).map((response) => { return response.json() });
  }

  create(collection, doc) {
    return this.http.post(this.api + collection, doc).map((response) => { return response.json() });
  }

  update(collection, doc) {
    var docClone = JSON.parse(JSON.stringify(doc));
    delete docClone._id;
    return this.http.put(this.api + collection + '/' + doc._id, docClone).map((response) => { return response.json() });
  }

  remove(collection, doc) {
    return this.http.delete(this.api + collection + '/' + doc._id, doc).map((response) => { return response.json() });
  }
}

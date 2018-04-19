import { Http, BaseRequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';
import { User } from '../.././model/user.model';

let LOGS = console.log;

@Injectable()
export class UserdetailsService extends BaseRequestOptions {
  headers = new Headers({
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
  });

  url;

  constructor(private _http: Http) {
    super();   
  }

  public getUserDetails(ppsn:string) {

    this.url = 'http://localhost:8080/CustomerController/getCustomerDetail?ppsn=' + ppsn;

        return this._http.get(this.url).map(data => {
          data.json();
          //LOGS("<< UserDetails: >> ", data.json());
          return data.json();
        });
    }
}
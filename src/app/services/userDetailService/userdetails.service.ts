import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

let LOGS = console.log;

@Injectable()
export class UserdetailsService {

  constructor(private _http: Http) { }

  public getUserDetails(ppsn: string) {
    return this._http.get(environment.USER_DETAIL_URL + ppsn).map(data => {
      data.json();

      debugger;
      return data.json();
    })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Feature } from '../.././model/feature.model';
import { environment } from "../../../environments/environment";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

let LOGS = console.log;

type feature = Array<Feature>;

@Injectable()
export class EmployerFeatureService {

  constructor(private http: Http) { }

  getEmployerFeature(optValue: string): Observable<Feature[]> {

    return this.http
      .get(environment.EMPLOYER_FEATURE_URL + optValue)
      .map((response: Response) => {
        const data = <Object[]>response.json();
        debugger;
        return data;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}

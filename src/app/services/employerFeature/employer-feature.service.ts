import { Http, BaseRequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';
import { Feature } from '../.././model/feature.model';

let LOGS = console.log;
// @Injectable()
// export class EmployerFeatureService  extends BaseRequestOptions {
//   headers = new Headers({
//     'Cache-Control': 'no-cache',
//     'Pragma': 'no-cache',
//     'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
//   });

//   url;

//   constructor(private _http: Http) {
//     super();
//     this.url = 'http://localhost:8080/EmployerController/getEmployerServices?ppsn=8107760A';
//   }

//   public getEmployerServices() {
//         return this._http.get(this.url).map(data => {
//           data.json();
//           LOGS(" >> EmployerServices: >> ", data.json());
//           return data.json();
//         });
//     }
// }
type feature = Array<Feature>;

@Injectable()
export class EmployerFeatureService {

  constructor(private http: Http) {  }

  getEmployerFeature(optValue:string): Observable<Feature[]> {

    LOGS(">>optValue:" + optValue);

      return this.http
          .get('http://localhost:8080/EmployerController/getEmployerServices?ppsn=8107760A&opt='+optValue)
          .map((response: Response) => {
            const data= <Object[]> response.json();
            console.log(">> getEmployerFeature >> " + (JSON.stringify(data)));

              return  data;
          })
          .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
}

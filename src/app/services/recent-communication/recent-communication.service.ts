import { Http, Response } from '@angular/http';
import { Feature } from '../.././model/feature.model';
import { environment } from "../../../environments/environment";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

let LOGS = console.log;

@Injectable()
export class RecentCommunicationService {
    constructor(private http: Http) { }

    getRecentCommunication(): Observable<Feature[]> {

        return this.http
            .get(environment.RECENT_COMMUNICATION_URL + '8107760A')
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

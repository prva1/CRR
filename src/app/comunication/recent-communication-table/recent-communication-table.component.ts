import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { DataSource } from "@angular/cdk/collections";
import { EmployerFeatureService } from '../../services/employerFeature/employer-feature.service';
import { User } from '../../model/user.model';
import { Feature } from '../../model/feature.model';
import { RecentCommunicationService } from '../../services/recent-Communication/recent-communication.service';

@Component({
  selector: 'app-recent-communication-table',
  templateUrl: './recent-communication-table.component.html',
  styleUrls: ['./recent-communication-table.component.css']
})
export class RecentCommunicationTableComponent implements OnInit {

  public displayedColumns = ['tittle','date'];
  public dataSource = new UserDataSource(this.recentCommunicationService);
  selectedRowIndex: number = -1;

  constructor(private recentCommunicationService:RecentCommunicationService) { }

  ngOnInit() {
  }

  highlight(row) {
    this.selectedRowIndex = row.tittle;
  }
}

export class UserDataSource extends DataSource<any>{

  constructor(private recentCommunicationService:RecentCommunicationService) {
    super();
  }

  _getArray: Feature[];

  connect(): Observable<Feature[]> {
    this.recentCommunicationService.getRecentCommunication()
      .subscribe(resultArray => this._getArray = resultArray,
        error => console.log("Error :: " + error)
      )
    return this.recentCommunicationService.getRecentCommunication();

  }

  disconnect() { }

}
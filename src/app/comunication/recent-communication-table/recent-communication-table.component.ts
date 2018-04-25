import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { DataSource } from "@angular/cdk/collections";
import { EmployerFeatureService } from '../../services/employerFeature/employer-feature.service';
import { User } from '../../model/user.model';
import { Feature } from '../../model/feature.model';
import { RecentCommunicationService } from '../../services/recent-Communication/recent-communication.service';
import { MatTableDataSource, MatSort, MatSortable, MatPaginator } from '@angular/material';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-recent-communication-table',
  templateUrl: './recent-communication-table.component.html',
  styleUrls: ['./recent-communication-table.component.css']
})
export class RecentCommunicationTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('filter') filter: ElementRef;

  /** @internal */ goTo(p: number) { this.paginator.pageIndex = p; }
  public dataSource;
  public displayedColumns = ['tittle', 'number', 'date'];

  selectedRowIndex: number = -1;

  highlight(row) {
    this.selectedRowIndex = row.date;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private recentCommunicationService: RecentCommunicationService) { }

  ngOnInit() {
    this.recentCommunicationService.getRecentCommunication()
      .subscribe(results => {

        if (!results) {
          return;
        }

        this.dataSource = new MatTableDataSource<Feature>(results);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
      })
  }
}


// implements OnInit {

//   public displayedColumns = ['tittle','date'];
//   public dataSource = new CommunicationDataSource(this.recentCommunicationService);
//   selectedRowIndex: number = -1;

//   constructor(private recentCommunicationService:RecentCommunicationService) { }

//   ngOnInit() {
//   }

//   highlight(row) {
//     this.selectedRowIndex = row.tittle;
//   }
// }

// export class CommunicationDataSource extends DataSource<Feature>{

//   constructor(private recentCommunicationService:RecentCommunicationService) {
//     super();
//   }

//   _getArray: Feature[];

//   connect(): Observable<Feature[]> {
//     this.recentCommunicationService.getRecentCommunication()
//       .subscribe(resultArray => this._getArray = resultArray,
//         error => console.log("Error :: " + error)
//       )
//     return this.recentCommunicationService.getRecentCommunication();

//   }

//   disconnect() { }

// }
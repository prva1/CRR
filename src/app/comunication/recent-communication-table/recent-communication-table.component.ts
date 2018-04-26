
/* Component in change to handle data in the communication table, including its call service.
filtering, paginator and sort */ 

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// Services
import { EmployerFeatureService } from '../../services/employerFeature/employer-feature.service';
import { RecentCommunicationService } from '../../services/recent-Communication/recent-communication.service';

// Material
import { MatTableDataSource, MatSort, MatSortable, MatPaginator } from '@angular/material';

// DataSource
import { DataSource } from "@angular/cdk/collections";

// ReactiveX
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

// Model
import { Feature } from '../../model/feature.model';

@Component({
  selector: 'app-recent-communication-table',
  templateUrl: './recent-communication-table.component.html',
  styleUrls: ['./recent-communication-table.component.css']
})
export class RecentCommunicationTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;

  /** @internal */
  goTo(p: number) { this.paginator.pageIndex = p; }

  public dataSource;
  public displayedColumns = ['tittle', 'number', 'date'];

  /*  To handle row color selection for the table.   */
  selectedRowIndex: number = -1;

  highlight(row) {
    this.selectedRowIndex = row.date;
  }

  constructor(private recentCommunicationService: RecentCommunicationService) { }

  ngOnInit() {
    /* Call recent communication service */
    this.recentCommunicationService.getRecentCommunication()
      .subscribe(results => {

        // Check if the service return something different.
        if (!results) { return; }

        // update dataSouce with response from the service  
        this.dataSource = new MatTableDataSource<Feature>(results);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        // Watch the dinamyc input search to filter and render data to show in the table
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
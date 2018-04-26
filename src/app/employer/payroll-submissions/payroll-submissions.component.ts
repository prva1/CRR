/** 
 * Component in change to pull payroll submission data from the service component
 */

import { Component, OnInit } from '@angular/core';

// ReactiveX and Datasource
import { Observable } from "rxjs/Observable";
import { DataSource } from "@angular/cdk/collections";

// Service in charge to provide payroll submission using opt=1
import { EmployerFeatureService } from '../../services/employerFeature/employer-feature.service';

// JSON modle with a generic structure
import { Feature } from '../../model/feature.model';

// Enum constant
import { SubServiceCategoryEnum } from '../../utility/subServiceCategoryEnum';

@Component({
  selector: 'app-payroll-submissions',
  templateUrl: './payroll-submissions.component.html',
  styleUrls: ['./payroll-submissions.component.css']
})
export class PayrollSubmissionsComponent implements OnInit {

  public dataSource = new FeatureDataSource(this.employerFeatureService);

  // List of colums needed to be linked with the render html 
  public displayedColumns = ['tittle'];

  // Value for selected and unselected highlight row.
  selectedRowIndex: number = -1;

  constructor(private employerFeatureService: EmployerFeatureService) { }

  // Callback method
  ngOnInit() { }

  // highlight selected row for the rendered table
  highlight(row) {
    this.selectedRowIndex = row.tittle;
  }
}

// Customized datasource
export class FeatureDataSource extends DataSource<Feature>{

  constructor(private employerFeatureService: EmployerFeatureService) {
    super();
  }

  // Call the service with Observable behavior.
  connect(): Observable<Feature[]> {
    this.employerFeatureService.getEmployerFeature(SubServiceCategoryEnum.PAYROLL_SUBMISSIONS)
      .subscribe(resultArray => resultArray,
        error => console.log("Error :: " + error)
      )
    return this.employerFeatureService.getEmployerFeature(SubServiceCategoryEnum.PAYROLL_SUBMISSIONS);

  }
  disconnect() { }
}
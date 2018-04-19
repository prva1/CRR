import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { DataSource } from "@angular/cdk/collections";
import { EmployerFeatureService } from '../../services/employerFeature/employer-feature.service';
import { User } from '../../model/user.model';
import { Feature } from '../../model/feature.model';
import { SubServiceCategoryEnum } from '../../utility/subServiceCategoryEnum';

@Component({
  selector: 'app-payroll-submissions',
  templateUrl: './payroll-submissions.component.html',
  styleUrls: ['./payroll-submissions.component.css']
})
export class PayrollSubmissionsComponent implements OnInit {

  public dataSource = new UserDataSource(this.employerFeatureService);

  public displayedColumns = ['tittle'];

  constructor(private employerFeatureService: EmployerFeatureService) { }

  ngOnInit() {
  }

  selectedRowIndex: number = -1;

  highlight(row) {
    this.selectedRowIndex = row.tittle;
  }
}

export class UserDataSource extends DataSource<any>{

  constructor(private employerFeatureService: EmployerFeatureService) {
    super();
  }

  _getArray: Feature[];

  connect(): Observable<Feature[]> {
    this.employerFeatureService.getEmployerFeature(SubServiceCategoryEnum.PAYROLL_SUBMISSIONS)
      .subscribe(resultArray => this._getArray = resultArray,
        error => console.log("Error :: " + error)
      )
    return this.employerFeatureService.getEmployerFeature(SubServiceCategoryEnum.PAYROLL_SUBMISSIONS);

  }

  disconnect() { }

}


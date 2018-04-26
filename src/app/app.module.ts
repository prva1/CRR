/* Main module for all dependecies (Services, component) also include/import others Modules */

// Modules

/* MaterialModule is a custome one for package or group type of dependecies */
import { MaterialModule } from './material.module';
/* ServicesModule is a custome one for package or group type of dependecies */
import { ServicesModule } from './services.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSortModule } from '@angular/material';

// Component

import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { PpsnComponent } from './userCard/ppsn/ppsn.component';
import { UserstatusSubHeaderComponent } from './user-status-sub-header/userstatus-sub-header/userstatus-sub-header.component';
import { SearchComponent } from './search/search/search.component';
import { UserContactComponent } from './userCard/user-contact/user-contact.component';
import { PayrollSubmissionsComponent } from './employer/payroll-submissions/payroll-submissions.component';
import { RpnDataComponent } from './employer/rpn-data/rpn-data.component';
import { PendingReturnComponent } from './employer/pending-return/pending-return.component';
import { StatementOfAccountComponent } from './employer/statement-of-account/statement-of-account.component';
import { RecentCommunicationComponent } from './comunication/recent-communication/recent-communication.component';
import { EmployerServicesComponent } from './employer/employer-services/employer-services.component';
import { RecentCommunicationTableComponent } from './comunication/recent-communication-table/recent-communication-table.component';

// Services

import { UserdetailsService } from './services/UserdetailService/userdetails.service';
import { EmployerFeatureService } from './services/employerFeature/employer-feature.service';
import { RecentCommunicationService } from './services/recent-Communication/recent-communication.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent,
    PpsnComponent,
    UserstatusSubHeaderComponent,
    SearchComponent,
    UserContactComponent,
    PayrollSubmissionsComponent,
    RpnDataComponent,
    PendingReturnComponent,
    StatementOfAccountComponent,
    RecentCommunicationComponent,
    EmployerServicesComponent,
    RecentCommunicationTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServicesModule,
    CdkTableModule,
    NgxPaginationModule,
    MatSortModule
  ],
  exports: [
    CdkTableModule
  ],
  providers: [UserdetailsService, EmployerFeatureService, RecentCommunicationService],

  bootstrap: [AppComponent]
})
export class AppModule { }


# CRR 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.



## Code scaffolding

Run `ng generate component component-name` to generate a new component.
 You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
 Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).



## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README]
(https://github.com/angular/angular-cli/blob/master/README.md).

## Project Structure

TREE of the project, general structure:

 <app-root> 
    	    <app-userstatus-sub-header>
        	    <app-search></app-search>
    	    </app-userstatus-sub-header>

	        <app-customer-detail>
   		        <app-ppsn></app-ppsn>
    	    	<app-user-contact></app-user-contact>
    	    </app-customer-detail>

	        <app-recent-communication>
        	     <app-recent-communication-table></app-recent-communication-table>
    	    </app-recent-communication>

	        <app-employer-services>
        	     <app-payroll-submissions></app-payroll-submissions>
                 <app-rpn-data></app-rpn-data>
                 <app-pending-return></app-pending-return>
                 <app-statement-of-account></app-statement-of-account>
    	     </app-employer-services>
 </app-root>

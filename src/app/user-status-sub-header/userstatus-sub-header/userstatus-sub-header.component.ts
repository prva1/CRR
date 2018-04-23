import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../../services/UserdetailService/userdetails.service';
import { User } from '../../model/user.model';
import { ReturnStatement } from '@angular/compiler';
import { SearchComponent } from "../../search/search/search.component";

@Component({
  selector: 'app-userstatus-sub-header',
  templateUrl: './userstatus-sub-header.component.html',
  styleUrls: ['./userstatus-sub-header.component.css']
})
export class UserstatusSubHeaderComponent implements OnInit {

  private ppsn: string;
  private stateDescription: string;

  constructor(private userdetailsService: UserdetailsService) { }

  ngOnInit() {
    this.userdetailsService.getUserDetails("8107760A").subscribe(
      data => {
        this.ppsn = data.ppsn;
        this.stateDescription = data.stateDescription;
      }
    );
  }

  public getppsn() {
    return this.ppsn;
  }

  public setppsn(ppsn: string) {
    this.ppsn = ppsn;
  }

  public getstateDescription() {
    return this.stateDescription;
  }

  public setstateDescription(stateDescription: string) {
    return this.stateDescription = stateDescription;
  }


}


import { Component, OnInit, Input } from '@angular/core';
import { UserdetailsService } from '../../services/UserdetailService/userdetails.service';

import { User } from '../../model/user.model';
import { ReturnStatement } from '@angular/compiler';
import { SubServiceCategoryEnum } from '../../utility/subServiceCategoryEnum';
@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent  implements OnInit {

  tiles = [
    { text: '', content: '', cols: 0, rows: 10, color: 'white'},
    { text: 'Last contact date: ', content: '', cols: 3, rows: 1, color: 'white' },
    { text: 'Last Contact reason: ', content: '', cols: 3, rows: 1, color: 'white' },
    { text: 'Time on call:', content: '', cols: 3, rows: 1, color: 'white' },
    { text: '', content: '', cols: 3, rows: 1, color: 'white' },
    { text: '', content: '', cols: 3, rows: 1, color: 'white' },
    { text: '', content: '', cols: 3, rows: 1, color: 'white' },
    { text: '', content: '', cols: 3, rows: 1, color: 'white' },
    { text: '', content: '', cols: 3, rows: 1, color: 'white' },
    { text: '', content: '', cols: 3, rows: 1, color: 'white' },
  ];   
  

  private lastContactDate:string;
  private lastContactReason:string;
  private timeOncall:string;
  
  public getlastContactDate (){
    return this.lastContactDate;
  }

  public setlastContactDate(lastContactDate:string){
    this.lastContactDate = lastContactDate;
  }

  public getlastContactReason (){
    return this.lastContactReason;
  }

  public setlastContactReason(lastContactReason:string){
    this.lastContactReason = lastContactReason;
  }

  public gettimeOncall (){
    return this.timeOncall;
  }

  public settimeOncall(timeOncall:string){
    this.timeOncall = timeOncall;
  }

  constructor(private userdetailsService:UserdetailsService) {  }

  ngOnInit() {

    this.userdetailsService.getUserDetails("8107760A").subscribe( data => {
        this.tiles[1].content = this.lastContactDate = data.lastContactReason;        
        this.tiles[2].content = this.lastContactReason = data.lastContactReason;
        this.tiles[3].content = this.timeOncall = data.timeOncall;
      }
    );
  }

}

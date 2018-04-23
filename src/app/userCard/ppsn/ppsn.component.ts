import { Component, OnInit, Input } from '@angular/core';
import { UserdetailsService } from '../../services/UserdetailService/userdetails.service';

import { User } from '../../model/user.model';
import { ReturnStatement } from '@angular/compiler';
import { SubServiceCategoryEnum } from '../../utility/subServiceCategoryEnum';


@Component({
  selector: 'app-ppsn',
  templateUrl: './ppsn.component.html',
  styleUrls: ['./ppsn.component.css']
})
export class PpsnComponent implements OnInit {

  tiles = [
    { text: '', content: '', cols: 0, rows: 10, color: 'white' },
    { text: 'Name: ', content: '', cols: 3, rows: 1, color: 'white' },
    { text: 'Address: ', content: '', cols: 3, rows: 1, color: 'white' },
    { text: '', content: '', cols: 3, rows: 1, color: 'white' },
    { text: 'Case size: ', content: '', cols: 3, rows: 1, color: 'white' },
    { text: 'Tier: ', content: '', cols: 3, rows: 1, color: 'white' },
    { text: 'District: ', content: '', cols: 3, rows: 1, color: 'white' },
    { text: '', content: '', cols: 3, rows: 1, color: 'white' },
    { text: 'Outstanding return: ', content: '', cols: 3, rows: 1, color: 'white' },
    { text: 'Customer balance: ', content: '', cols: 3, rows: 1, color: 'white' },
  ];

  private nameUser: string;
  private address: string;
  private casesize: string;
  private tier: string;
  private district: string;
  private outstandingReturn: string;
  private customerBalance: string;

  constructor(private userdetailsService: UserdetailsService) { }

  ngOnInit() {

    this.userdetailsService.getUserDetails("8107760A").subscribe(data => {

      this.tiles[1].content = this.nameUser = data.nameUser;
      this.tiles[2].content = this.address = data.address;
      this.tiles[4].content = this.casesize = data.casesize;
      this.tiles[5].content = this.tier = data.tier;
      this.tiles[6].content = this.district = data.district;
      this.tiles[8].content = this.outstandingReturn = data.outstandingReturn;
      this.tiles[9].content = this.customerBalance = data.customerBalance;

    }
    );
  }

  public getnameUser() {
    return this.nameUser;
  }

  public setnameUser(nameUser: string) {
    this.nameUser = nameUser;
  }

  public getaddress() {
    return this.address;
  }

  public setaddress(address: string) {
    this.address = address;
  }

  public getcasesize() {
    return this.casesize;
  }

  public setcasesize(casesize: string) {
    this.casesize = casesize;
  }

  public gettier() {
    return this.tier;
  }

  public settier(tier: string) {
    this.tier = tier;
  }

  public getdistrict() {
    return this.district;
  }

  public setdistrict(district: string) {
    this.district = district;
  }

  public getoutstandingReturn() {
    return this.outstandingReturn;
  }

  public setoutstandingReturn(outstandingReturn: string) {
    this.outstandingReturn = outstandingReturn;
  }

  public getcustomerBalance() {
    return this.customerBalance;
  }

  public setcustomerBalance(customerBalance: string) {
    this.customerBalance = customerBalance;
  }

}

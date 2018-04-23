package com.rev.crr.demo.model;

import java.io.Serializable;

public class Customer implements Serializable {
  //- 0
  String ppsn;
  String stateDescription;
  //- 1
  String nameUser;
  String address;
  String casesize;
  String tier;
  String district;
  String outstandingReturn;
  String customerBalance;
  //- 2
  String lastContactDate;
  String lastContactReason;
  String timeOncall;

  public Customer (){}

  public Customer(final String ppsn, final String stateDescription) {
    this.ppsn = ppsn;
    this.stateDescription = stateDescription;
  }

  public Customer(String ppsn, String stateDescription, String name, String address, String casesiZe, String tier, String district, String outstandingReturn, String customerBalance) {
    this.ppsn = ppsn;
    this.stateDescription = stateDescription;
    this.nameUser = name;
    this.address = address;
    this.casesize = casesiZe;
    this.tier = tier;
    this.district = district;
    this.outstandingReturn = outstandingReturn;
    this.customerBalance = customerBalance;
  }

  public Customer(String ppsn, String stateDescription, String name, String address, String casesiZe, String tier, String district, String outstandingReturn, String customerBalance, String lastContactDate, String lastContactReason, String timeOncall) {
    this.ppsn = ppsn;
    this.stateDescription = stateDescription;
    this.nameUser = name;
    this.address = address;
    this.casesize = casesiZe;
    this.tier = tier;
    this.district = district;
    this.outstandingReturn = outstandingReturn;
    this.customerBalance = customerBalance;
    this.lastContactDate = lastContactDate;
    this.lastContactReason = lastContactReason;
    this.timeOncall = timeOncall;
  }

  public String getPpsn() {
    return ppsn;
  }

  public void setPpsn(String ppsn) {
    this.ppsn = ppsn;
  }

  public String getStateDescription() {
    return stateDescription;
  }

  public void setStateDescription(String stateDescription) {
    this.stateDescription = stateDescription;
  }

  public String getNameUser() {
    return nameUser;
  }

  public void setNameUser(String nameUser) {
    this.nameUser = nameUser;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getCasesize() {
    return casesize;
  }

  public void setCasesize(String casesize) {
    this.casesize = casesize;
  }

  public String getTier() {
    return tier;
  }

  public void setTier(String tier) {
    this.tier = tier;
  }

  public String getDistrict() {
    return district;
  }

  public void setDistrict(String district) {
    this.district = district;
  }

  public String getOutstandingReturn() {
    return outstandingReturn;
  }

  public void setOutstandingReturn(String outstandingReturn) {
    this.outstandingReturn = outstandingReturn;
  }

  public String getCustomerBalance() {
    return customerBalance;
  }

  public void setCustomerBalance(String customerBalance) {
    this.customerBalance = customerBalance;
  }

  public String getLastContactDate() {
    return lastContactDate;
  }

  public void setLastContactDate(String lastContactDate) {
    this.lastContactDate = lastContactDate;
  }

  public String getLastContactReason() {
    return lastContactReason;
  }

  public void setLastContactReason(String lastContactReason) {
    this.lastContactReason = lastContactReason;
  }

  public String getTimeOncall() {
    return timeOncall;
  }

  public void setTimeOncall(String timeOncall) {
    this.timeOncall = timeOncall;
  }

  @Override
  public int hashCode() {
    return super.hashCode();
  }

  @Override
  public boolean equals(Object obj) {
    return super.equals(obj);
  }

  @Override
  public String toString() {
    return "CustomerController{" +
      "ppsn='" + ppsn + '\'' +
      ", stateDescription='" + stateDescription + '\'' +
      ", nameUser='" + nameUser + '\'' +
      ", address='" + address + '\'' +
      ", casesize='" + casesize + '\'' +
      ", tier='" + tier + '\'' +
      ", district='" + district + '\'' +
      ", outstandingReturn='" + outstandingReturn + '\'' +
      ", customerBalance='" + customerBalance + '\'' +
      ", lastContactDate='" + lastContactDate + '\'' +
      ", lastContactReason='" + lastContactReason + '\'' +
      ", timeOncall='" + timeOncall + '\'' +
      '}';
  }
}

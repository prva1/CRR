package com.rev.crr.demo.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class CustomerServices implements Serializable {

  private List<PayrollSubmission>  payrollSubmissionList= new ArrayList<PayrollSubmission>();

  private List<RpnData>  rpnDataList= new ArrayList<RpnData>();

  private List<PendingReturn>  pendingReturnList= new ArrayList<PendingReturn>();

  private List<StatementOfAccount>  statementOfAccountList= new ArrayList<StatementOfAccount>();



  public CustomerServices() {
    }

  public CustomerServices(List<PayrollSubmission> payrollSubmissionList, List<RpnData> rpnDataList, List<PendingReturn> pendingReturnList, List<StatementOfAccount> statementOfAccountList) {
    this.payrollSubmissionList = payrollSubmissionList;
    this.rpnDataList = rpnDataList;
    this.pendingReturnList = pendingReturnList;
    this.statementOfAccountList = statementOfAccountList;
  }

  public List<PayrollSubmission> getPayrollSubmissionList() {
    return payrollSubmissionList;
  }

  public void setPayrollSubmissionList(List<PayrollSubmission> payrollSubmissionList) {
    this.payrollSubmissionList = payrollSubmissionList;
  }

  public List<RpnData> getRpnDataList() {
    return rpnDataList;
  }

  public void setRpnDataList(List<RpnData> rpnDataList) {
    this.rpnDataList = rpnDataList;
  }

  public List<PendingReturn> getPendingReturnList() {
    return pendingReturnList;
  }

  public void setPendingReturnList(List<PendingReturn> pendingReturnList) {
    this.pendingReturnList = pendingReturnList;
  }

  public List<StatementOfAccount> getStatementOfAccountList() {
    return statementOfAccountList;
  }

  public void setStatementOfAccountList(List<StatementOfAccount> statementOfAccountList) {
    this.statementOfAccountList = statementOfAccountList;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    CustomerServices that = (CustomerServices) o;
    return Objects.equals(payrollSubmissionList, that.payrollSubmissionList) &&
      Objects.equals(rpnDataList, that.rpnDataList) &&
      Objects.equals(pendingReturnList, that.pendingReturnList) &&
      Objects.equals(statementOfAccountList, that.statementOfAccountList);
  }

  @Override
  public int hashCode() {

    return Objects.hash(payrollSubmissionList, rpnDataList, pendingReturnList, statementOfAccountList);
  }

  @Override
  public String toString() {
    return "CustomerServices{" +
      "payrollSubmissionList=" + payrollSubmissionList +
      ", rpnDataList=" + rpnDataList +
      ", pendingReturnList=" + pendingReturnList +
      ", statementOfAccountList=" + statementOfAccountList +
      '}';
  }
}

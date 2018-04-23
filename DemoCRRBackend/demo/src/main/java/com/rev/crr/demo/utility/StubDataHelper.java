package com.rev.crr.demo.utility;

import com.rev.crr.demo.model.*;
import java.util.ArrayList;
import java.util.List;

public class StubDataHelper {

private List<Customer> customerList= new ArrayList<Customer>();

private CustomerServices customerServicesList= new CustomerServices();

private List<Communication> recentCommunicationList= new ArrayList<Communication>();

  public StubDataHelper(){
    stubCustomerData();
    stubCustomerServicesData();
    stubRecentCommunicationData();
  }

  private void stubCustomerData(){

    customerList.add(new Customer("8107760A","Tax Clearance Refused","CustomerController Name", "01, CustomerController example address, Example","XXXXXXX","XXXXXXX","XXXXXXX","0.00","0.00","01/01/2011","Example reason","3 Mins"));
    customerList.add(new Customer("8207760A","Tax Clearance Approved"));
    customerList.add(new Customer("8307760A","Tax Clearance Other"));
    customerList.add(new Customer("8407760A","Tax Clearance in progress"));
  }

  private void stubCustomerServicesData(){

    customerServicesList.getPayrollSubmissionList().add(new PayrollSubmission("Payroll submission:1","40001070805","05/01/2018"));
    customerServicesList.getPayrollSubmissionList().add(new PayrollSubmission("Payroll submission:2","888665304","06/12/2017"));
    customerServicesList.getPayrollSubmissionList().add(new PayrollSubmission("Payroll submission:3","6786524930","28/11/2017"));
    customerServicesList.getPayrollSubmissionList().add(new PayrollSubmission("Payroll submission:4","40001067805","05/01/2018"));
    customerServicesList.getPayrollSubmissionList().add(new PayrollSubmission("Payroll submission:5","888665342","06/12/2017"));
    customerServicesList.getPayrollSubmissionList().add(new PayrollSubmission("Payroll submission:6","6786524760","28/11/2017"));


    customerServicesList.getRpnDataList().add(new RpnData("RPN data: 1","40001070805","05/01/2018"));
    customerServicesList.getRpnDataList().add(new RpnData("RPN data: 2","888665304","06/12/2017"));
    customerServicesList.getRpnDataList().add(new RpnData("RPN data: 3","6786524930","28/11/2017"));


    customerServicesList.getPendingReturnList().add(new PendingReturn("Pending returns: 1","40001070805","05/01/2018"));
    customerServicesList.getPendingReturnList().add(new PendingReturn("Pending returns: 2","888665304","06/12/2017"));
    customerServicesList.getPendingReturnList().add(new PendingReturn("Pending returns: 3","6786524930","28/11/2017"));


    customerServicesList.getStatementOfAccountList().add(new StatementOfAccount("Statement of account: 1","40001070805","05/01/2018"));
    customerServicesList.getStatementOfAccountList().add(new StatementOfAccount("Statement of account: 2","888665304","06/12/2017"));
    customerServicesList.getStatementOfAccountList().add(new StatementOfAccount("Statement of account: 3","6786524930","28/11/2017"));
  }

  private void stubRecentCommunicationData(){
    recentCommunicationList.add(new Communication("Recent Communication: AIM","40001070805","05/01/2018"));
    recentCommunicationList.add(new Communication("Recent Communication: Customer Notes","888665304","06/12/2017"));
    recentCommunicationList.add(new Communication("Recent Communication: I.C","6786524930","28/11/2017"));
  }


/*customerList.stream()
  .peek(num -> System.out.println("will filter " + num))
    .filter(p -> p.getPpsn() == ppns)
    .findFirst().get();*/
  public Customer getCustomer(final String ppsn){

    for (Customer customer:customerList) {
      if (customer.getPpsn().equals(ppsn))
        return customer;
    }
    return  new Customer();
  }


  public List<Customer> getCustomerList() {
    return customerList;
  }

  public CustomerServices getCustomerServicesList() {
    return customerServicesList;
  }

  public List<Communication> getRecentCommunicationList() {
    return recentCommunicationList;
  }
}

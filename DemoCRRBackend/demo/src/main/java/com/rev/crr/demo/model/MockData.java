package com.rev.crr.demo.model;

import java.util.ArrayList;
import java.util.List;

public class MockData {

public List<Customer> customerList= new ArrayList<Customer>();

public CustomerServices customerServicesList= new CustomerServices();

  public MockData(){
    mockCustomerData();
    mockCustomerServicesData();
  }

  private void mockCustomerData(){
    customerList.add(new Customer("8107760A","Tax Clearance Refused","Customer Name", "01, Customer example address, Example","XXXXXXX","XXXXXXX","XXXXXXX","0.00","0.00","01/01/2011","Example reason","3 Mins"));
    customerList.add(new Customer("8207760A","Tax Clearance Approved"));
    customerList.add(new Customer("8307760A","Tax Clearance Other"));
    customerList.add(new Customer("8407760A","Tax Clearance in progress"));
  }

  private void mockCustomerServicesData(){

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

  private void mockEmployerServicesData(){

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





}

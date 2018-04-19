package com.rev.crr.demo.Controller;

import com.rev.crr.demo.model.MockData;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/CustomerController")
public class Customer {
  // http://localhost:8080/CustomerController/getCustomer?ppsn=8107760A

  @RequestMapping("/getCustomerDetail")
  public com.rev.crr.demo.model.Customer getStatus(@RequestParam(value = "ppsn") String ppsn) {

  /*  MockData mockData= new MockData();
    return mockData.customerList.get(1);*/
    return new MockData().getCustomer(ppsn);
  }
}

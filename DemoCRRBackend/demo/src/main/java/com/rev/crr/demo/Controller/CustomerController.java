package com.rev.crr.demo.Controller;

import com.rev.crr.demo.utility.StubDataHelper;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/CustomerController")
public class CustomerController {
  // TODO - http://localhost:8080/CustomerController/getCustomer?ppsn=8107760A

  @RequestMapping(value="/getCustomerDetail", method = RequestMethod.GET)
  public com.rev.crr.demo.model.Customer getStatus(final @RequestParam(value = "ppsn") String ppsn) {
    return new StubDataHelper().getCustomer(ppsn);
  }
}

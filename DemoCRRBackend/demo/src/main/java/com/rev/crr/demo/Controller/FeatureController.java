package com.rev.crr.demo.Controller;

import com.rev.crr.demo.utility.StubDataHelper;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/EmployerController")
public class FeatureController {

  // TODO - http://localhost:8080/EmployerController/getEmployerServices?ppsn=8107760A&opt=1

  @RequestMapping(value="/getEmployerServices", method = RequestMethod.GET)
  public Object getEmployerServices(final @RequestParam(value = "ppsn", required = true) String ppsn, final @RequestParam(value = "opt", required = false) String opt) {

    switch (opt) {
      case "1":
        return new StubDataHelper().getCustomerServicesList().getPayrollSubmissionList();
      case "2":
        return new StubDataHelper().getCustomerServicesList().getRpnDataList();
      case "3":
        return new StubDataHelper().getCustomerServicesList().getPendingReturnList();
      case "4":
        return new StubDataHelper().getCustomerServicesList().getStatementOfAccountList();
      default:
        return new StubDataHelper().getCustomerServicesList();
    }

  }
}

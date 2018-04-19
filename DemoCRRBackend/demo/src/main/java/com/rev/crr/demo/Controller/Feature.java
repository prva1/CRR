package com.rev.crr.demo.Controller;

import com.rev.crr.demo.model.MockData;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/EmployerController")
public class Feature {

  // http://localhost:8080/EmployerController/getEmployerServices?ppsn=8107760A&opt=1

  @RequestMapping("/getEmployerServices")
  public Object getEmployerServices(@RequestParam(value = "ppsn") String ppsn, @RequestParam(value = "opt") String opt) {
    // TODO - rough built

    switch (opt) {
      case "1":
        return new MockData().customerServicesList.getPayrollSubmissionList();

      case "2":
        return new MockData().customerServicesList.getRpnDataList();

      case "3":
        return new MockData().customerServicesList.getPendingReturnList();

      case "4":
        return new MockData().customerServicesList.getStatementOfAccountList();
    }


    return null;
  }
}

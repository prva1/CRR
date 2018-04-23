package com.rev.crr.demo.Controller;

import com.rev.crr.demo.model.Communication;
import com.rev.crr.demo.utility.StubDataHelper;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/CommunicationController")
public class CommunicationController {
  // TODO - http://localhost:8080/CommunicationController/getCommunication?ppsn=8107760A

  @RequestMapping(value="/getCommunication", method = RequestMethod.GET)
  public List<Communication> getCommunication(final @RequestParam(value = "ppsn", required = true) String ppsn) {
    return new StubDataHelper().getRecentCommunicationList();
  }
}

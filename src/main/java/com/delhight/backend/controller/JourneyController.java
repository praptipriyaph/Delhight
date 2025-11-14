package com.delhight.backend.controller;

import com.delhight.backend.model.JourneyRequest;
import com.delhight.backend.model.JourneyResponse;
import com.delhight.backend.service.JourneyService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class JourneyController {

    private final JourneyService journeyService;

    public JourneyController(JourneyService journeyService) {
        this.journeyService = journeyService;
    }

    @PostMapping("/journey")
    public JourneyResponse compute(@RequestBody JourneyRequest req) {
        return journeyService.calculateJourney(req);
    }
}




package com.delhight.backend.controller;

import com.delhight.backend.model.JourneyRequest;
import com.delhight.backend.model.RouteOption;
import com.delhight.backend.service.FullJourneyService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/full-journey")
public class FullJourneyController {

    private final FullJourneyService fullJourneyService;

    public FullJourneyController(FullJourneyService fullJourneyService) {
        this.fullJourneyService = fullJourneyService;
    }

    @PostMapping("/best")
    public RouteOption getBestJourney(@RequestBody JourneyRequest req) {

        return fullJourneyService.computeBestJourney(
                req.getSourceLat(),
                req.getSourceLng(),
                req.getDestLat(),
                req.getDestLng()
        );
    }
}




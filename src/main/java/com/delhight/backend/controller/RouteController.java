package com.delhight.backend.controller;

import com.delhight.backend.model.JourneyRequest;
import com.delhight.backend.model.JourneyResponse;
import com.delhight.backend.service.RouteService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class RouteController {

    private final RouteService routeService;

    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    /**
     * Main endpoint to compute the journey
     * Input: JourneyRequest (source, destination, selected stations)
     * Output: JourneyResponse (list of RouteOption)
     */
    @PostMapping("/compute")
    public JourneyResponse computeRoute(@RequestBody JourneyRequest request) {
        return routeService.computeJourney(request);
    }
}





package com.delhight.backend.controller;

import com.delhight.backend.service.GoogleDirectionsService;
import com.delhight.backend.model.RouteLeg;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DirectionsTestController {

    private final GoogleDirectionsService directionsService;

    public DirectionsTestController(GoogleDirectionsService directionsService) {
        this.directionsService = directionsService;
    }

    /**
     * Test Google Directions walking / driving / transit.
     * Example:
     * /api/test-leg?mode=walking
     */
    @GetMapping("/test-leg")
    public RouteLeg testLeg(@RequestParam String mode) {

        // Use fixed points in Delhi for testing
        String origin = "28.6139,77.2090";   // India Gate
        String destination = "28.6250,77.2100"; // Nearby CP area

        return directionsService.fetchLeg(
                1,                      // piece
                "Origin",
                "Destination",
                origin,
                destination,
                mode
        );
    }
}


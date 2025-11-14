package com.delhight.backend.controller;

import com.delhight.backend.model.Station;
import com.delhight.backend.service.GooglePlacesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GooglePlacesController {

    private final GooglePlacesService placesService;

    public GooglePlacesController(GooglePlacesService placesService) {
        this.placesService = placesService;
    }

    /**
     * GET /api/nearest-stations?lat=..&lng=..
     * Returns the nearest 3 stations as List<Station>
     */
    @GetMapping("/nearest-stations")
    public List<Station> getNearestStations(
            @RequestParam double lat,
            @RequestParam double lng
    ) {
        return placesService.getTopNStations(lat, lng, 3);
    }

    /**
     * GET /api/top-stations?lat=..&lng=..&n=..
     * Returns top N stations
     */
    @GetMapping("/top-stations")
    public List<Station> getTopStations(
            @RequestParam double lat,
            @RequestParam double lng,
            @RequestParam(defaultValue = "3") int n
    ) {
        return placesService.getTopNStations(lat, lng, n);
    }
}







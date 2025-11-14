package com.delhight.backend.service;

import com.delhight.backend.model.JourneyRequest;
import com.delhight.backend.model.JourneyResponse;
import com.delhight.backend.model.Station;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JourneyService {

    private final GooglePlacesService places;
    private final RouteService routeService;

    public JourneyService(GooglePlacesService places, RouteService routeService) {
        this.places = places;
        this.routeService = routeService;
    }

    public JourneyResponse calculateJourney(JourneyRequest req) {

        // 1️⃣ Find top 3 nearest metro stations to source
        List<Station> sourceStations =
                places.getTopNStations(req.getSourceLat(), req.getSourceLng(), 3);

        // 2️⃣ Find top 3 nearest metro stations to destination
        List<Station> destStations =
                places.getTopNStations(req.getDestLat(), req.getDestLng(), 3);

        // For now: pick best of first source + first destination
        Station bestSource = sourceStations.get(0);
        Station bestDest = destStations.get(0);

        // Set inside request (so RouteService can use them)
        req.setFromStation(bestSource);
        req.setToStation(bestDest);

        return routeService.computeJourney(req);
    }
}












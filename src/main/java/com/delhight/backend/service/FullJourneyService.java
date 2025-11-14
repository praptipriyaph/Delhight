package com.delhight.backend.service;

import com.delhight.backend.model.Station;
import com.delhight.backend.model.RouteOption;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FullJourneyService {

    private final GooglePlacesService placesService;
    private final RouteService routeService;

    public FullJourneyService(GooglePlacesService placesService, RouteService routeService) {
        this.placesService = placesService;
        this.routeService = routeService;
    }

    /**
     * Compute best journey based on top N nearest source & destination stations.
     */
    public RouteOption computeBestJourney(double srcLat, double srcLng,
                                          double dstLat, double dstLng) {

        // Fetch top 3 nearest metro stations to SOURCE & DESTINATION
        List<Station> srcStations = placesService.getTopNStations(srcLat, srcLng, 3);
        List<Station> dstStations = placesService.getTopNStations(dstLat, dstLng, 3);

        if (srcStations == null || dstStations == null || srcStations.isEmpty() || dstStations.isEmpty()) {
            throw new RuntimeException("No stations found nearby.");
        }

        RouteOption best = null;
        double bestTime = Double.MAX_VALUE;

        // Try ALL permutations: each src station → each dst station
        for (Station A : srcStations) {
            for (Station B : dstStations) {

                RouteOption option = routeService.computeJourneyFromStations(
                        srcLat, srcLng,
                        dstLat, dstLng,
                        A, B
                );

                if (option != null && option.getTotalTimeMinutes() < bestTime) {
                    best = option;
                    bestTime = option.getTotalTimeMinutes();
                }
            }
        }

        if (best == null) {
            throw new RuntimeException("Unable to compute a valid route option for provided locations.");
        }

        return best;
    }
}

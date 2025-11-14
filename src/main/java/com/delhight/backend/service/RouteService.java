package com.delhight.backend.service;

import com.delhight.backend.model.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class RouteService {

    private final GoogleDirectionsService directions;

    public RouteService(GoogleDirectionsService directions) {
        this.directions = directions;
    }

    /**
     * Given JourneyRequest, compute the 4 route options:
     * 1. Walk → Metro → Walk
     * 2. Auto → Metro → Auto
     * 3. Walk → Metro → Auto
     * 4. Auto → Metro → Walk
     */
    public JourneyResponse computeJourney(JourneyRequest req) {

        Station sourceStation = req.getFromStation();
        Station destStation = req.getToStation();

        List<RouteOption> results = new ArrayList<>();

        // 1️⃣ Walk → Metro → Walk
        results.add(buildRouteOption(
                req,
                "Walk → Metro → Walk",
                "walking",
                "transit",
                "walking",
                sourceStation,
                destStation
        ));

        // 2️⃣ Auto → Metro → Auto
        results.add(buildRouteOption(
                req,
                "Auto → Metro → Auto",
                "driving",
                "transit",
                "driving",
                sourceStation,
                destStation
        ));

        // 3️⃣ Walk → Metro → Auto
        results.add(buildRouteOption(
                req,
                "Walk → Metro → Auto",
                "walking",
                "transit",
                "driving",
                sourceStation,
                destStation
        ));

        // 4️⃣ Auto → Metro → Walk
        results.add(buildRouteOption(
                req,
                "Auto → Metro → Walk",
                "driving",
                "transit",
                "walking",
                sourceStation,
                destStation
        ));

        // Filter nulls (if any leg failed)
        results.removeIf(r -> r == null);

        // sort by lowest time first
        results.sort(Comparator.comparingDouble(RouteOption::getTotalTimeMinutes));

        return new JourneyResponse(results);
    }


    /**
     * Build one complete route option consisting of:
     * piece 1 = source → nearest station
     * piece 2 = station → station (transit)
     * piece 3 = station → destination
     */
    private RouteOption buildRouteOption(
            JourneyRequest req,
            String modeSummary,
            String mode1,
            String mode2,
            String mode3,
            Station fromStation,
            Station toStation
    ) {

        String sourceLatLng = req.getSourceLat() + "," + req.getSourceLng();
        String destLatLng = req.getDestLat() + "," + req.getDestLng();
        String stationA = fromStation.getLat() + "," + fromStation.getLng();
        String stationB = toStation.getLat() + "," + toStation.getLng();

        List<RouteStep> allSteps = new ArrayList<>();
        double totalMinutes = 0;
        double totalCost = 0;

        // 🚶 / 🚗 start → station
        RouteLeg leg1 = directions.fetchLeg(
                1,
                req.getSourceName(),
                fromStation.getName(),
                sourceLatLng,
                stationA,
                mode1
        );
        if (leg1 == null) return null;
        allSteps.addAll(leg1.getSteps());
        totalMinutes += leg1.getDurationSeconds() / 60.0;
        totalCost += mode1.equals("driving") ? estimateAutoFare(leg1.getDistanceMeters()) : 0;

        // 🚇 station → station
        RouteLeg leg2 = directions.fetchLeg(
                2,
                fromStation.getName(),
                toStation.getName(),
                stationA,
                stationB,
                mode2
        );
        if (leg2 == null) return null;
        allSteps.addAll(leg2.getSteps());
        totalMinutes += leg2.getDurationSeconds() / 60.0;
        totalCost += leg2.getFareRs(); // metro fare from Google

        // 🚶 / 🚗 station → destination
        RouteLeg leg3 = directions.fetchLeg(
                3,
                toStation.getName(),
                req.getDestName(),
                stationB,
                destLatLng,
                mode3
        );
        if (leg3 == null) return null;
        allSteps.addAll(leg3.getSteps());
        totalMinutes += leg3.getDurationSeconds() / 60.0;
        totalCost += mode3.equals("driving") ? estimateAutoFare(leg3.getDistanceMeters()) : 0;

        return new RouteOption(modeSummary, totalMinutes, totalCost, allSteps);
    }

    public RouteOption computeJourneyFromStations(
            double srcLat, double srcLng,
            double dstLat, double dstLng,
            Station srcStation, Station dstStation
    ) {
        JourneyRequest req = new JourneyRequest();

        req.setSourceLat(srcLat);
        req.setSourceLng(srcLng);
        req.setDestLat(dstLat);
        req.setDestLng(dstLng);

        req.setSourceName("Origin");
        req.setDestName("Destination");

        req.setFromStation(srcStation);
        req.setToStation(dstStation);

        JourneyResponse jr = computeJourney(req);
        if (jr == null || jr.getOptions() == null || jr.getOptions().isEmpty()) {
            return null;
        }
        return jr.getOptions().get(0);  // Best already sorted
    }



    /**
     * Simple auto fare model (static for demo)
     */
    private double estimateAutoFare(long distanceMeters) {
        double km = distanceMeters / 1000.0;
        return Math.max(30, km * 12);
    }
}

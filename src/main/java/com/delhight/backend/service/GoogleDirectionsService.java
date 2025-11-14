package com.delhight.backend.service;

import com.delhight.backend.model.RouteLeg;
import com.delhight.backend.model.RouteStep;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class GoogleDirectionsService {

    @Value("${google.api.key}")
    private String apiKey;

    private final RestTemplate rest = new RestTemplate();
    private final ObjectMapper mapper = new ObjectMapper();

    private static final String DIRECTIONS_URL = "https://maps.googleapis.com/maps/api/directions/json";

    /**
     * Call Google Directions API with given mode (walking, driving, transit).
     * originLatLng and destLatLng are "lat,lng" strings.
     *
     * For transit mode we set departure_time to the next 10:00 AM (Asia/Kolkata) to
     * ensure metro routes appear even if request is made at night.
     */
    public RouteLeg fetchLeg(int piece,
                             String fromName,
                             String toName,
                             String originLatLng,
                             String destLatLng,
                             String mode) {

        try {
            StringBuilder url = new StringBuilder();
            url.append(String.format("%s?origin=%s&destination=%s&mode=%s&key=%s",
                    DIRECTIONS_URL,
                    originLatLng,
                    destLatLng,
                    mode,
                    apiKey));

            // If transit, prefer rail and set departure_time to next 10:00 AM Asia/Kolkata
            if ("transit".equalsIgnoreCase(mode)) {
                url.append("&transit_mode=rail");

                // compute next 10:00 AM in Asia/Kolkata
                ZonedDateTime nowKolkata = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));
                ZonedDateTime nextTen = nowKolkata.withHour(10).withMinute(0).withSecond(0).withNano(0);
                if (nowKolkata.isAfter(nextTen) || nowKolkata.isEqual(nextTen)) {
                    nextTen = nextTen.plusDays(1);
                }
                long epochSeconds = nextTen.toEpochSecond();
                url.append("&departure_time=").append(epochSeconds);
            }

            String json = rest.getForObject(url.toString(), String.class);
            JsonNode root = mapper.readTree(json);

            JsonNode routes = root.path("routes");
            if (!routes.isArray() || routes.size() == 0) {
                return null;
            }

            JsonNode route = routes.get(0);
            JsonNode legs = route.path("legs");
            if (!legs.isArray() || legs.size() == 0) {
                return null;
            }

            JsonNode leg = legs.get(0);

            long distMeters = leg.path("distance").path("value").asLong(0);
            long durSeconds = leg.path("duration").path("value").asLong(0);

            RouteLeg rl = new RouteLeg();
            rl.setPiece(piece);
            rl.setFromName(fromName);
            rl.setToName(toName);
            rl.setMode(mode);
            rl.setDistanceMeters(distMeters);
            rl.setDurationSeconds(durSeconds);

            // polyline
            String poly = route.path("overview_polyline").path("points").asText(null);
            rl.setPolyline(poly);

            // Parse steps
            List<RouteStep> steps = new ArrayList<>();
            for (JsonNode step : leg.path("steps")) {
                String instr = step.path("html_instructions").asText();
                instr = instr.replaceAll("\\<.*?\\>", ""); // strip HTML

                long sDist = step.path("distance").path("value").asLong(0);
                long sDur = step.path("duration").path("value").asLong(0);

                steps.add(new RouteStep(instr, sDist, sDur));
            }
            rl.setSteps(steps);

            // Metro fare: Google's route.fare may be present
            if (route.has("fare")) {
                rl.setFareRs(route.path("fare").path("value").asDouble(0));
            } else {
                rl.setFareRs(0);
            }

            return rl;

        } catch (Exception e) {
            throw new RuntimeException("Directions API error: " + e.getMessage(), e);
        }
    }
}






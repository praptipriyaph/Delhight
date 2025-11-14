package com.delhight.backend.service;

import com.delhight.backend.model.Station;
import com.delhight.backend.utils.DistanceUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class GooglePlacesService {

    @Value("${google.api.key}")
    private String apiKey;

    private final RestTemplate rest = new RestTemplate();
    private final ObjectMapper mapper = new ObjectMapper();

    private static final String STATIONS_TEXTSEARCH =
            "https://maps.googleapis.com/maps/api/place/textsearch/json?query=%s&location=%s&radius=5000&key=%s";

    /**
     * Fetch top N metro stations based on Google Places + distance
     */
    public List<Station> getTopNStations(double lat, double lng, int n) {

        try {
            String keywords = "Delhi Metro Station";
            String latlng = lat + "," + lng;

            String url = String.format(STATIONS_TEXTSEARCH, keywords, latlng, apiKey);
            String json = rest.getForObject(url, String.class);

            JsonNode root = mapper.readTree(json);
            JsonNode results = root.path("results");

            List<Station> stations = new ArrayList<>();

            for (JsonNode r : results) {
                String name = r.path("name").asText("");
                String placeId = r.path("place_id").asText("");

                double slat = r.path("geometry").path("location").path("lat").asDouble();
                double slng = r.path("geometry").path("location").path("lng").asDouble();

                double dist = DistanceUtils.haversine(lat, lng, slat, slng);

                stations.add(new Station(name, placeId, slat, slng, dist));
            }

            // Sort ascending by distance
            stations.sort(Comparator.comparingDouble(Station::getDistanceMeters));

            // Return top N
            if (stations.size() > n)
                return stations.subList(0, n);

            return stations;

        } catch (Exception ex) {
            throw new RuntimeException("Google Places error: " + ex.getMessage(), ex);
        }
    }
}



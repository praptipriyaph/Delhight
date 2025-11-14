package com.delhight.backend.utils;

public class DistanceUtils {

    private static final double EARTH_RADIUS_KM = 6371.0;

    /**
     * Haversine formula to compute distance between two lat-lng coordinates.
     * Returns meters.
     */
    public static double haversine(double lat1, double lon1, double lat2, double lon2) {
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);

        lat1 = Math.toRadians(lat1);
        lat2 = Math.toRadians(lat2);

        double a = Math.pow(Math.sin(dLat / 2), 2)
                + Math.pow(Math.sin(dLon / 2), 2)
                * Math.cos(lat1) * Math.cos(lat2);

        double c = 2 * Math.asin(Math.sqrt(a));

        // distance in kilometers → convert to meters
        return EARTH_RADIUS_KM * c * 1000;
    }
}



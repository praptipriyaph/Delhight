package com.delhight.backend.model;

public class NearbyStation {
    private String name;
    private String placeId;
    private double lat;
    private double lng;
    private double distance;

    public NearbyStation(String name, String placeId, double lat, double lng, double distance) {
        this.name = name;
        this.placeId = placeId;
        this.lat = lat;
        this.lng = lng;
        this.distance = distance;
    }

    public String getName() { return name; }
    public String getPlaceId() { return placeId; }
    public double getLat() { return lat; }
    public double getLng() { return lng; }
    public double getDistance() { return distance; }
}





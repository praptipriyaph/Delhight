package com.delhight.backend.model;

public class Station {

    private String name;
    private String placeId;
    private double lat;
    private double lng;

    // Distance from input location (in meters)
    private double distanceMeters;

    public Station(String name, String placeId, double lat, double lng, double distanceMeters) {
        this.name = name;
        this.placeId = placeId;
        this.lat = lat;
        this.lng = lng;
        this.distanceMeters = distanceMeters;
    }

    public String getName() {
        return name;
    }

    public String getPlaceId() {
        return placeId;
    }

    public double getLat() {
        return lat;
    }

    public double getLng() {
        return lng;
    }

    public double getDistanceMeters() {
        return distanceMeters;
    }

    public void setDistanceMeters(double distanceMeters) {
        this.distanceMeters = distanceMeters;
    }
}






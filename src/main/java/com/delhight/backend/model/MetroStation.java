package com.delhight.backend.model;

public class MetroStation {
    private String name;
    private double lat;
    private double lng;
    private double distanceMeters;

    public MetroStation(String name, double lat, double lng, double distanceMeters) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.distanceMeters = distanceMeters;
    }

    public String getName() {
        return name;
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
}


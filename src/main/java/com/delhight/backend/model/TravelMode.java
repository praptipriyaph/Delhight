package com.delhight.backend.model;

public enum TravelMode {
    WALKING("walking"),
    DRIVING("driving"),
    TRANSIT("transit"),
    AUTO("driving"); // auto behaves like driving

    private final String apiName;

    TravelMode(String apiName) {
        this.apiName = apiName;
    }

    public String apiName() {
        return apiName;
    }
}

package com.delhight.backend.model;

public class JourneyStep {
    private String mode;      // WALK, AUTO, METRO
    private int distance;     // in meters
    private int duration;     // in seconds
    private String details;   // e.g. "Walk to Shastri Nagar Metro Station"

    public JourneyStep() {}

    public JourneyStep(String mode, int distance, int duration, String details) {
        this.mode = mode;
        this.distance = distance;
        this.duration = duration;
        this.details = details;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}


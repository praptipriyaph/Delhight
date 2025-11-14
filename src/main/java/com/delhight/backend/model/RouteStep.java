package com.delhight.backend.model;

public class RouteStep {

    private String instruction;
    private long distanceMeters;
    private long durationSeconds;

    public RouteStep() {}

    public RouteStep(String instruction, long distanceMeters, long durationSeconds) {
        this.instruction = instruction;
        this.distanceMeters = distanceMeters;
        this.durationSeconds = durationSeconds;
    }

    public String getInstruction() {
        return instruction;
    }

    public void setInstruction(String instruction) {
        this.instruction = instruction;
    }

    public long getDistanceMeters() {
        return distanceMeters;
    }

    public void setDistanceMeters(long distanceMeters) {
        this.distanceMeters = distanceMeters;
    }

    public long getDurationSeconds() {
        return durationSeconds;
    }

    public void setDurationSeconds(long durationSeconds) {
        this.durationSeconds = durationSeconds;
    }
}





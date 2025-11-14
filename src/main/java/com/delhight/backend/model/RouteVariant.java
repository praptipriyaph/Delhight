package com.delhight.backend.model;

import java.util.List;

public class RouteVariant {
    private String id;
    private long totalDistanceMeters;
    private long totalDurationSeconds;
    private double totalCostRs;
    private List<RouteLeg> legs;

    public RouteVariant() {}

    // getters/setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public long getTotalDistanceMeters() { return totalDistanceMeters; }
    public void setTotalDistanceMeters(long totalDistanceMeters) { this.totalDistanceMeters = totalDistanceMeters; }
    public long getTotalDurationSeconds() { return totalDurationSeconds; }
    public void setTotalDurationSeconds(long totalDurationSeconds) { this.totalDurationSeconds = totalDurationSeconds; }
    public double getTotalCostRs() { return totalCostRs; }
    public void setTotalCostRs(double totalCostRs) { this.totalCostRs = totalCostRs; }
    public List<RouteLeg> getLegs() { return legs; }
    public void setLegs(List<RouteLeg> legs) { this.legs = legs; }
}

package com.delhight.backend.model;

import java.util.List;

public class RouteLeg {

    private int piece; // 1 = start, 2 = middle, 3 = end
    private String fromName;
    private String toName;
    private String mode; // walk / driving / transit
    private long distanceMeters;
    private long durationSeconds;
    private double fareRs; // only if transit returns fare
    private String polyline;
    private List<RouteStep> steps;
    private String extra;

    public int getPiece() {
        return piece;
    }

    public void setPiece(int piece) {
        this.piece = piece;
    }

    public String getFromName() {
        return fromName;
    }

    public void setFromName(String fromName) {
        this.fromName = fromName;
    }

    public String getToName() {
        return toName;
    }

    public void setToName(String toName) {
        this.toName = toName;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
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

    public double getFareRs() {
        return fareRs;
    }

    public void setFareRs(double fareRs) {
        this.fareRs = fareRs;
    }

    public String getPolyline() {
        return polyline;
    }

    public void setPolyline(String polyline) {
        this.polyline = polyline;
    }

    public List<RouteStep> getSteps() {
        return steps;
    }

    public void setSteps(List<RouteStep> steps) {
        this.steps = steps;
    }

    public String getExtra() {
        return extra;
    }

    public void setExtra(String extra) {
        this.extra = extra;
    }
}



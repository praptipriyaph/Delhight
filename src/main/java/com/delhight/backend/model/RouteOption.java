package com.delhight.backend.model;

import java.util.List;

public class RouteOption {

    private String modeSummary;          // "Walk → Metro → Walk" OR "Auto → Metro → Auto"
    private double totalTimeMinutes;     // total time in minutes
    private double totalCost;            // final cost in Rs
    private List<RouteStep> steps;       // ordered step-by-step instructions

    public RouteOption() {}

    public RouteOption(String modeSummary, double totalTimeMinutes, double totalCost, List<RouteStep> steps) {
        this.modeSummary = modeSummary;
        this.totalTimeMinutes = totalTimeMinutes;
        this.totalCost = totalCost;
        this.steps = steps;
    }

    public String getModeSummary() {
        return modeSummary;
    }

    public void setModeSummary(String modeSummary) {
        this.modeSummary = modeSummary;
    }

    public double getTotalTimeMinutes() {
        return totalTimeMinutes;
    }

    public void setTotalTimeMinutes(double totalTimeMinutes) {
        this.totalTimeMinutes = totalTimeMinutes;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public List<RouteStep> getSteps() {
        return steps;
    }

    public void setSteps(List<RouteStep> steps) {
        this.steps = steps;
    }
}





package com.delhight.backend.model;

import java.util.List;

public class JourneyOption {
    private String label;           // e.g. "Walk + Metro + Auto"
    private int totalDuration;      // in seconds
    private List<JourneyStep> steps;

    public JourneyOption() {}

    public JourneyOption(String label, int totalDuration, List<JourneyStep> steps) {
        this.label = label;
        this.totalDuration = totalDuration;
        this.steps = steps;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public int getTotalDuration() {
        return totalDuration;
    }

    public void setTotalDuration(int totalDuration) {
        this.totalDuration = totalDuration;
    }

    public List<JourneyStep> getSteps() {
        return steps;
    }

    public void setSteps(List<JourneyStep> steps) {
        this.steps = steps;
    }
}


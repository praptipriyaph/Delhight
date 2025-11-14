package com.delhight.backend.model;

import java.util.List;

public class JourneyResponse {

    private List<RouteOption> options;

    public JourneyResponse() {}

    public JourneyResponse(List<RouteOption> options) {
        this.options = options;
    }

    public List<RouteOption> getOptions() {
        return options;
    }

    public void setOptions(List<RouteOption> options) {
        this.options = options;
    }
}



package com.delhight.backend.model;

public class RouteCandidate {
    public Station startStation;
    public Station endStation;

    public double startDistance;
    public double endDistance;

    public boolean startAuto;
    public boolean endAuto;

    public double weight; // estimated time for ranking
}


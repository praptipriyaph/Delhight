package com.delhight.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api") // optional base path
public class PingController {

    @GetMapping("/ping")
    public String ping() {
        return "Backend is running fine 🚀";
    }
}




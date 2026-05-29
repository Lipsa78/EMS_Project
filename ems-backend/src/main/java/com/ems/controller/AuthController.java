package com.ems.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.ems.dto.LoginRequest;
import com.ems.dto.RegisterRequest;
import com.ems.service.AuthService;

@RestController
@RequestMapping("/auth")

public class AuthController {

    @Autowired
    private AuthService authService;

    // REGISTER

    @PostMapping("/register")

    public String register(
            @RequestBody RegisterRequest request) {

        return authService.register(request);
    }

    // LOGIN

    @PostMapping("/login")

    public String login(
            @RequestBody LoginRequest request) {

        return authService.login(request);
    }
}
package com.ems.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.bcrypt
        .BCryptPasswordEncoder;

import org.springframework.stereotype.Service;

import com.ems.dto.LoginRequest;
import com.ems.dto.RegisterRequest;

import com.ems.entity.User;

import com.ems.repository.UserRepository;

import com.ems.security.JwtUtil;

@Service

public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // REGISTER USER

    public String register(
            RegisterRequest request) {

        User user = new User();

        user.setName(
                request.getName());

        user.setEmail(
                request.getEmail());

        // ENCRYPT PASSWORD

        user.setPassword(

                passwordEncoder.encode(
                        request.getPassword()));

        user.setRole(
                request.getRole());

        user.setStatus("ACTIVE");

        userRepository.save(user);

        return "User Registered Successfully";
    }

    // LOGIN USER

    public String login(
            LoginRequest request) {

        User user = userRepository
                .findByEmail(
                        request.getEmail())
                .orElse(null);

        // EMAIL CHECK

        if(user == null) {

            return "Invalid Email";
        }

        // PASSWORD CHECK

        boolean match = passwordEncoder.matches(

                request.getPassword(),

                user.getPassword());

        if(!match) {

            return "Invalid Password";
        }

        // GENERATE JWT TOKEN

        String token = jwtUtil.generateToken(

                user.getEmail(),

                user.getRole());

        return token;
    }
}
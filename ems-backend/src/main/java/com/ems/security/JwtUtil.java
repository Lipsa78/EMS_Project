package com.ems.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import io.jsonwebtoken.security.Keys;

import java.security.Key;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component

public class JwtUtil {

    private static final String SECRET_KEY =
            "mysecretkeymysecretkeymysecretkey12";

    private Key getSignKey() {

        return Keys.hmacShaKeyFor(
                SECRET_KEY.getBytes());
    }

    // GENERATE TOKEN

    public String generateToken(
            String email,
            String role) {

        return Jwts.builder()

                .setSubject(email)

                .claim("role", role)

                .setIssuedAt(
                        new Date())

                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                + 1000 * 60 * 60))

                .signWith(
                        getSignKey(),
                        SignatureAlgorithm.HS256)

                .compact();
    }

    // EXTRACT EMAIL

    public String extractEmail(
            String token) {

        return getClaims(token)
                .getSubject();
    }

    // EXTRACT ROLE

    public String extractRole(
            String token) {

        return getClaims(token)
                .get("role", String.class);
    }

    // GET CLAIMS

    private Claims getClaims(
            String token) {

        return Jwts.parserBuilder()

                .setSigningKey(
                        getSignKey())

                .build()

                .parseClaimsJws(token)

                .getBody();
    }

    // VALIDATE TOKEN

    public boolean validateToken(
            String token) {

        try {

            getClaims(token);

            return true;

        } catch (Exception e) {

            return false;
        }
    }
}
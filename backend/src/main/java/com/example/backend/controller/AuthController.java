package com.example.backend.controller;

import com.example.backend.model.MediaObject;
import com.example.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private JwtUtil jwtUtil;
    @PostMapping("/login")
    public ResponseEntity<String> login(
            @RequestParam String username,
            @RequestParam String password
    ) {
        if (username.equals(System.getenv("ADMIN_USERNAME")) &&
                password.equals(System.getenv("ADMIN_PASSWORD"))) {
            return ResponseEntity.ok(jwtUtil.generateToken(username));
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}

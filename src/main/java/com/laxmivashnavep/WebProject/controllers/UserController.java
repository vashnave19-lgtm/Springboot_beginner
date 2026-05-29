package com.laxmivashnavep.WebProject.controllers;

import java.util.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;

import com.laxmivashnavep.WebProject.model.*;
import com.laxmivashnavep.WebProject.services.UserService;

@RestController
@RequestMapping("/api/users")

public class UserController {
    private UserService userService;
    public UserController() {
        userService = new UserService();
    }

    @GetMapping
    public ResponseEntity<List<User>> getAll() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
}

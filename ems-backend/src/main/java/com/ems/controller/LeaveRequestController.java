package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.
annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.ems.entity.LeaveRequest;

import com.ems.service.LeaveRequestService;

@RestController

@RequestMapping("/leaves")

public class LeaveRequestController {

    @Autowired
    private LeaveRequestService service;

    // GET ALL

    @GetMapping

    public List<LeaveRequest>
    getAllLeaves() {

        return service.getAllLeaves();
    }

    // APPLY LEAVE

    @PostMapping

    public LeaveRequest applyLeave(
            @RequestBody LeaveRequest leave) {

        System.out.println(
                leave.getEmployee());

        return service.applyLeave(leave);
    }

    // GET BY ID

    @GetMapping("/{id}")

    public LeaveRequest getLeaveById(
            @PathVariable Long id) {

        return service
                .getLeaveById(id);
    }

    // APPROVE LEAVE

    @PutMapping("/approve/{id}")

    public LeaveRequest approveLeave(
            @PathVariable Long id) {

        return service
                .approveLeave(id);
    }

    // REJECT LEAVE

    @PutMapping("/reject/{id}")

    public LeaveRequest rejectLeave(
            @PathVariable Long id) {

        return service
                .rejectLeave(id);
    }

    // DELETE LEAVE

    @DeleteMapping("/{id}")

    public String deleteLeave(
            @PathVariable Long id) {

        return service
                .deleteLeave(id);
    }
}
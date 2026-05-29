package com.ems.controller;

import java.util.List;


import org.springframework.beans.factory.
annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.ems.entity.Attendance;

import com.ems.service.AttendanceService;

@RestController

@RequestMapping("/attendance")

public class AttendanceController {

    @Autowired

    private AttendanceService service;

    // SAVE ATTENDANCE

 // CHECK-IN

    @PostMapping("/checkin")

    public Attendance checkIn(

            @RequestBody
            Attendance attendance) {

        return service
                .checkIn(attendance);
    }

    // CHECK-OUT

    @PutMapping("/checkout/{id}")

    public Attendance checkOut(
            @PathVariable Long id) {

        return service
                .checkOut(id);
    }

    // GET ALL

    @GetMapping

    public List<Attendance>
    getAllAttendance() {

        return service
                .getAllAttendance();
    }

    // GET BY ID

    @GetMapping("/{id}")

    public Attendance
    getAttendanceById(

            @PathVariable Long id) {

        return service
                .getAttendanceById(id);
    }

    // DELETE

    @DeleteMapping("/{id}")

    public String deleteAttendance(
            @PathVariable Long id) {

        return service
                .deleteAttendance(id);
    }
}
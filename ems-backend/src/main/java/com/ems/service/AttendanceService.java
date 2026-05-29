package com.ems.service;

import java.util.List;
import org.springframework.beans.factory.
annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ems.entity.Attendance;

import com.ems.repository.
AttendanceRepository;
import java.time.LocalDate;
import java.time.LocalTime;

@Service

public class AttendanceService {

    @Autowired

    private AttendanceRepository repo;

    // SAVE ATTENDANCE

    public Attendance saveAttendance(
            Attendance attendance) {

        return repo.save(attendance);
    }

    // GET ALL ATTENDANCE

    public List<Attendance>
    getAllAttendance() {

        return repo.findAll();
    }
    
    // CHECK-IN

    public Attendance checkIn(
            Attendance attendance) {

        attendance.setAttendanceDate(
                LocalDate.now());

        attendance.setCheckIn(
                LocalTime.now());

        attendance.setStatus(
                "PRESENT");

        return repo.save(attendance);
    }

    // CHECK-OUT

    public Attendance checkOut(
            Long id) {

        Attendance attendance =
                repo.findById(id)
                .orElse(null);

        if(attendance != null) {

            attendance.setCheckOut(
                    LocalTime.now());

            return repo.save(attendance);
        }

        return null;
    }

    // GET BY ID

    public Attendance getAttendanceById(
            Long id) {

        return repo.findById(id)
                .orElse(null);
    }

    // DELETE

    public String deleteAttendance(
            Long id) {

        repo.deleteById(id);

        return
        "Attendance Deleted Successfully";
    }
}
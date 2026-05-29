package com.ems.entity;

import jakarta.persistence.*;


import java.time.LocalDate;
import java.time.LocalTime;

@Entity

@Table(name = "attendance")

public class Attendance {

    @Id

    @GeneratedValue(strategy =
    GenerationType.IDENTITY)

    @Column(name = "attendance_id")

    private Long attendanceId;

    // Many attendance records
    // belong to one employee

    @ManyToOne

    @JoinColumn(name = "employee_id")

    private Employee employee;

    @Column(name = "attendance_date")

    private LocalDate attendanceDate;

    @Column(name = "check_in")

    private LocalTime checkIn;

    @Column(name = "check_out")

    private LocalTime checkOut;

    private String status;

    // Getters and Setters

    public Long getAttendanceId() {
        return attendanceId;
    }

    public void setAttendanceId(
            Long attendanceId) {

        this.attendanceId =
                attendanceId;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(
            Employee employee) {

        this.employee = employee;
    }

    public LocalDate getAttendanceDate() {
        return attendanceDate;
    }

    public void setAttendanceDate(
            LocalDate attendanceDate) {

        this.attendanceDate =
                attendanceDate;
    }

    public LocalTime getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(
            LocalTime checkIn) {

        this.checkIn = checkIn;
    }

    public LocalTime getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(
            LocalTime checkOut) {

        this.checkOut = checkOut;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(
            String status) {

        this.status = status;
    }
}
package com.ems.repository;

import org.springframework.data.jpa.repository.
JpaRepository;

import com.ems.entity.Attendance;

public interface AttendanceRepository

extends JpaRepository
<Attendance, Long> {

}
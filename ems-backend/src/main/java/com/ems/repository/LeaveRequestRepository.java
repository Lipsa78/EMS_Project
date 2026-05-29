package com.ems.repository;

import org.springframework.data.jpa.repository.
JpaRepository;

import com.ems.entity.LeaveRequest;

public interface LeaveRequestRepository

extends JpaRepository
<LeaveRequest, Long> {

}
package com.ems.service;

import java.util.List;

import org.springframework.beans.factory.
annotation.Autowired;

import org.springframework.stereotype.Service;

import com.ems.entity.LeaveRequest;

import com.ems.repository.
LeaveRequestRepository;

@Service

public class LeaveRequestService {

    @Autowired
    private LeaveRequestRepository repo;

    // GET ALL LEAVES

    public List<LeaveRequest> getAllLeaves() {

        return repo.findAll();
    }

    // APPLY LEAVE

    public LeaveRequest applyLeave(
            LeaveRequest leave) {

        leave.setStatus("PENDING");

        return repo.save(leave);
    }

    // GET LEAVE BY ID

    public LeaveRequest getLeaveById(
            Long id) {

        return repo.findById(id)
                .orElse(null);
    }

    // APPROVE LEAVE

    public LeaveRequest approveLeave(
            Long id) {

        LeaveRequest leave =
                repo.findById(id)
                .orElse(null);

        if(leave != null) {

            leave.setStatus(
                    "APPROVED");

            return repo.save(leave);
        }

        return null;
    }

    // REJECT LEAVE

    public LeaveRequest rejectLeave(
            Long id) {

        LeaveRequest leave =
                repo.findById(id)
                .orElse(null);

        if(leave != null) {

            leave.setStatus(
                    "REJECTED");

            return repo.save(leave);
        }

        return null;
    }

    // DELETE LEAVE

    public String deleteLeave(
            Long id) {

        repo.deleteById(id);

        return
        "Leave Deleted Successfully";
    }
}
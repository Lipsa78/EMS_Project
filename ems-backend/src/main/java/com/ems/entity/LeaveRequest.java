package com.ems.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "leave_requests")

public class LeaveRequest {

    @Id
    @GeneratedValue(strategy =
    GenerationType.IDENTITY)

    @Column(name = "leave_id")

    private Long leaveId;

    @ManyToOne

    @JoinColumn(name = "employee_id")

    private Employee employee;

    @Column(name = "leave_type")

    private String leaveType;

    @Column(name = "start_date")

    private LocalDate startDate;

    @Column(name = "end_date")

    private LocalDate endDate;

    private String reason;

    private String status;

    // GETTERS & SETTERS

    public Long getLeaveId() {
        return leaveId;
    }

    public void setLeaveId(Long leaveId) {
        this.leaveId = leaveId;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public String getLeaveType() {
        return leaveType;
    }

    public void setLeaveType(String leaveType) {
        this.leaveType = leaveType;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
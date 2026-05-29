package com.ems.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "payroll")

public class Payroll {

    @Id
    @GeneratedValue(strategy =
    GenerationType.IDENTITY)

    @Column(name = "payroll_id")
    private Long payrollId;

    @Column(name = "basic_salary")
    private Double basicSalary;

    private Double bonus;

    private Double deduction;

    @Column(name = "final_salary")
    private Double finalSalary;

    @Column(name = "payment_date")
    private LocalDate paymentDate;

    @Column(name = "payment_status")
    private String paymentStatus;

    @ManyToOne
    @JoinColumn(name = "employee_id")

    private Employee employee;

    // Getters and Setters
}
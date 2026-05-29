package com.ems.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.entity.Employee;

public interface EmployeeRepository
extends JpaRepository<Employee, Long> {

    // SEARCH BY NAME

    List<Employee>
    findByFirstNameContaining(
            String keyword);

    // FILTER BY STATUS

    List<Employee>
    findByStatus(
            String status);
}
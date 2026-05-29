package com.ems.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "departments")

public class Department {

    @Id
    @GeneratedValue(strategy =
    GenerationType.IDENTITY)

    @Column(name = "department_id")
    private Long departmentId;

    @Column(name = "department_name")
    private String departmentName;

    @Column(name = "manager_name")
    private String managerName;
    
    @OneToMany(mappedBy = "department")

    private List<Employee> employees;

	public Long getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}
	public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(
            List<Employee> employees) {

        this.employees = employees;
    }
    // Getters and Setters
}
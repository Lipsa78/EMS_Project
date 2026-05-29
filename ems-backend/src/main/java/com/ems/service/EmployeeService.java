package com.ems.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.ems.dto.EmployeeDTO;
import com.ems.entity.Employee;
import com.ems.exception.ResourceNotFoundException;
import com.ems.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    // ENTITY → DTO CONVERSION

    private EmployeeDTO convertToDTO(
            Employee employee) {

        EmployeeDTO dto =
                new EmployeeDTO();

        dto.setEmployeeId(
                employee.getEmployeeId());

        dto.setFirstName(
                employee.getFirstName());

        dto.setLastName(
                employee.getLastName());

        dto.setGender(
                employee.getGender());

        dto.setDateOfBirth(
                employee.getDateOfBirth());

        dto.setEmail(
                employee.getEmail());

        dto.setPhone(
                employee.getPhone());

        dto.setAddress(
                employee.getAddress());

        dto.setDesignation(
                employee.getDesignation());

        dto.setJoiningDate(
                employee.getJoiningDate());

        dto.setSalary(
                employee.getSalary());

        dto.setProfileImage(
                employee.getProfileImage());

        dto.setStatus(
                employee.getStatus());

        return dto;
    }

    // GET ALL EMPLOYEES

    public List<EmployeeDTO>
    getAllEmployees() {

        List<Employee> employees =
                repo.findAll();

        return employees.stream()

                .map(this::convertToDTO)

                .toList();
    }

    // GET EMPLOYEE BY ID

    public EmployeeDTO
    getEmployeeById(Long id) {

        Employee employee = repo.findById(id)

                .orElseThrow(() ->

                        new ResourceNotFoundException(
                                "Employee not found"));

        return convertToDTO(employee);
    }

    // SAVE EMPLOYEE

    public Employee saveEmployee(
            Employee employee) {

        return repo.save(employee);
    }

    // UPDATE EMPLOYEE

    public Employee updateEmployee(
            Long id,
            Employee employee) {

        Employee existingEmployee =
                repo.findById(id)

                        .orElseThrow(() ->

                                new ResourceNotFoundException(
                                        "Employee not found"));

        existingEmployee.setFirstName(
                employee.getFirstName());

        existingEmployee.setLastName(
                employee.getLastName());

        existingEmployee.setGender(
                employee.getGender());

        existingEmployee.setDateOfBirth(
                employee.getDateOfBirth());

        existingEmployee.setEmail(
                employee.getEmail());

        existingEmployee.setPhone(
                employee.getPhone());

        existingEmployee.setAddress(
                employee.getAddress());

        existingEmployee.setDesignation(
                employee.getDesignation());

        existingEmployee.setJoiningDate(
                employee.getJoiningDate());

        existingEmployee.setSalary(
                employee.getSalary());

        existingEmployee.setProfileImage(
                employee.getProfileImage());

        existingEmployee.setStatus(
                employee.getStatus());

        return repo.save(existingEmployee);
    }

    // DELETE EMPLOYEE

    public String deleteEmployee(
            Long id) {

        Employee employee =
                repo.findById(id)

                        .orElseThrow(() ->

                                new ResourceNotFoundException(
                                        "Employee not found"));

        repo.delete(employee);

        return "Employee Deleted Successfully";
    }
    public List<Employee>
    searchEmployee(String keyword) {

        return repo
                .findByFirstNameContaining(
                        keyword);
    }
    public List<Employee>
    getEmployeesByStatus(
    String status){

     return repo
     .findByStatus(status);
    }
    
 // FILTER EMPLOYEE

    public List<Employee>
    filterByStatus(String status){

        return repo.findByStatus(status);
    }

	public Page<Employee> getEmployeesWithPagination(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}
}
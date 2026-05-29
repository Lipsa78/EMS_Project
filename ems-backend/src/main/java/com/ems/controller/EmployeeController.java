package com.ems.controller;

import com.ems.dto.EmployeeDTO;

import com.ems.entity.Employee;
import com.ems.service.EmployeeService;
import com.ems.service.FileUploadService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;

import java.time.LocalDate;

import java.util.List;

@RestController

@RequestMapping("/employees")

@CrossOrigin(origins = "http://localhost:3000")

public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private FileUploadService fileUploadService;

    // =========================
    // ADD EMPLOYEE WITH IMAGE
    // =========================

    @PostMapping(
    	    consumes =
    	    MediaType.MULTIPART_FORM_DATA_VALUE
    	)

    public Employee addEmployee(

            @RequestParam("firstName")
            String firstName,

            @RequestParam("lastName")
            String lastName,

            @RequestParam(value = "gender",
                    required = false)
            String gender,

            @RequestParam(value = "dateOfBirth",
                    required = false)
            String dateOfBirth,

            @RequestParam("email")
            String email,

            @RequestParam(value = "phone",
                    required = false)
            String phone,

            @RequestParam(value = "address",
                    required = false)
            String address,

            @RequestParam(value = "designation",
                    required = false)
            String designation,

            @RequestParam(value = "joiningDate",
                    required = false)
            String joiningDate,

            @RequestParam(value = "salary",
                    required = false)
            Double salary,

            @RequestParam(value = "status",
                    required = false)
            String status,

            @RequestParam(value = "image",
                    required = false)
            MultipartFile image

    ) throws IOException {
        String uploadDir =
                System.getProperty("user.dir")
                        + "/uploads/";

        File dir = new File(uploadDir);

        if (!dir.exists()) {

            dir.mkdirs();
        }

        Employee employee =
                new Employee();

        employee.setFirstName(firstName);
        employee.setLastName(lastName);
        employee.setGender(gender);
        employee.setEmail(email);
        employee.setPhone(phone);
        employee.setAddress(address);
        employee.setDesignation(designation);
        employee.setSalary(salary);
        employee.setStatus(status);

        // DATE SAFE

        if(dateOfBirth != null &&
           !dateOfBirth.isEmpty()) {

            employee.setDateOfBirth(
                    LocalDate.parse(dateOfBirth));
        }

        if(joiningDate != null &&
           !joiningDate.isEmpty()) {

            employee.setJoiningDate(
                    LocalDate.parse(joiningDate));
        }

        // IMAGE SAFE

        if(image != null &&
           !image.isEmpty()) {

            String fileName =
                    image.getOriginalFilename();

            String filePath =
                    uploadDir + fileName;

            image.transferTo(
                    new File(filePath));

            employee.setProfileImage(
                    "/uploads/" + fileName
            );
        }

        return employeeService
                .saveEmployee(employee);
    }

    // =========================
    // GET ALL EMPLOYEES
    // =========================

    @GetMapping

    public List<EmployeeDTO>
    getAllEmployees() {

        return employeeService
                .getAllEmployees();
    }

    // =========================
    // GET EMPLOYEE BY ID
    // =========================

    @GetMapping("/{id}")

    public EmployeeDTO
    getEmployeeById(

            @PathVariable Long id) {

        return employeeService
                .getEmployeeById(id);
    }

    // =========================
    // UPDATE EMPLOYEE
    // =========================

    @PutMapping("/{id}")

    public Employee updateEmployee(

            @PathVariable Long id,

            @Valid
            @RequestBody Employee employee) {

        return employeeService
                .updateEmployee(id, employee);
    }

    // =========================
    // DELETE EMPLOYEE
    // =========================

    @DeleteMapping("/{id}")

    public String deleteEmployee(

            @PathVariable Long id) {

        return employeeService
                .deleteEmployee(id);
    }

    // =========================
    // SEARCH EMPLOYEE
    // =========================

    @GetMapping("/search")

    public List<Employee>
    searchEmployee(

            @RequestParam String keyword) {

        return employeeService
                .searchEmployee(keyword);
    }

    // =========================
    // FILTER BY STATUS
    // =========================

    @GetMapping("/status")

    public List<Employee>
    getEmployeesByStatus(

            @RequestParam String status) {

        return employeeService
                .getEmployeesByStatus(status);
    }

    // =========================
    // PAGINATION
    // =========================

    @GetMapping("/page")

    public Page<Employee>
    getEmployeesWithPagination(

            @RequestParam int page,

            @RequestParam int size) {

        Pageable pageable =

                PageRequest.of(page, size);

        return employeeService
                .getEmployeesWithPagination(pageable);
    }
}
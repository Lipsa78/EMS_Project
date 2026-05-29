package com.ems.controller;

import java.util.List;



import org.springframework.beans.factory.
annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.ems.entity.Department;

import com.ems.service.DepartmentService;

@RestController

@RequestMapping("/departments")

public class DepartmentController {

    @Autowired
    private DepartmentService service;

    // GET ALL

    @GetMapping

    public List<Department>
    getAllDepartments() {

        return service.getAllDepartments();
    }

 // GET BY ID

    @GetMapping("/{id}")

    public Department
    getDepartmentById(
            @PathVariable Long id) {

        return service
                .getDepartmentById(id);
    }
    
    // SAVE

    @PostMapping

    public Department addDepartment(

            @RequestBody
            Department department) {

        return service
                .saveDepartment(department);
    }
    
    // UPDATE

    @PutMapping("/{id}")

    public Department
    updateDepartment(

            @PathVariable Long id,

            @RequestBody
            Department department) {

        return service
                .updateDepartment(
                        id,
                        department);
    }
    
 // DELETE

    @DeleteMapping("/{id}")

    public String
    deleteDepartment(
    @PathVariable Long id) {

        return service.deleteDepartment(id);
    }
}
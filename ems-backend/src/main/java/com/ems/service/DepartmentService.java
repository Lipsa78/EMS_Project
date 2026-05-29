package com.ems.service;

import java.util.List;



import org.springframework.beans.factory.
annotation.Autowired;

import org.springframework.stereotype.Service;

import com.ems.entity.Department;

import com.ems.repository.
DepartmentRepository;

@Service

public class DepartmentService {

    @Autowired
    private DepartmentRepository repo;

    // GET ALL

    public List<Department>
    getAllDepartments() {

        return repo.findAll();
    }
    
 // GET BY ID

    public Department
    getDepartmentById(Long id) {

        return repo.findById(id)
                .orElse(null);
    }

    // SAVE

    public Department saveDepartment(
            Department department) {

        return repo.save(department);
    }
    

    // UPDATE

    public Department
    updateDepartment(
            Long id,
            Department department) {

        Department existing =
                repo.findById(id)
                .orElse(null);

        if(existing != null) {

            existing.setDepartmentName(
                    department.getDepartmentName());

            existing.setManagerName(
                    department.getManagerName());

            return repo.save(existing);
        }

        return null;
    }

    // DELETE

    public String
    deleteDepartment(Long id) {

        repo.deleteById(id);

        return
        "Department Deleted Successfully";
    }
    
 // SEARCH

    public List<Department>
    searchDepartment(String keyword){

        return repo
        .findByDepartmentNameContaining(
                keyword);
    }
}
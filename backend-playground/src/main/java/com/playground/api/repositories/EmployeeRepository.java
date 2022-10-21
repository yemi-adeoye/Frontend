package com.playground.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.playground.api.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}

/*
 JpaRepository<I> : save() findById()  findAll()  deleteById()  saveAll() 
 
  IOC: Inversion of Control 
 */
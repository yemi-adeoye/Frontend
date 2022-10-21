package com.playground.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.playground.api.dto.EmployeeDto;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
	
	@PostMapping("/add")
	public void addEmployee(@RequestBody EmployeeDto dto) {
		
		/* managerEmail is valid */
		
		/* Employee email is not already present */
		
		/* Password is encrypted */
		
		/* Save record in employee and user table */
		
	}
}

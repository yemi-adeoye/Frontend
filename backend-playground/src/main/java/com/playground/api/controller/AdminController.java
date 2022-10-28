package com.playground.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.playground.api.dto.EmployeeDto;
import com.playground.api.dto.ResponseDto;
import com.playground.api.model.Employee;
import com.playground.api.model.Manager;
import com.playground.api.model.User;
import com.playground.api.repositories.EmployeeRepository;
import com.playground.api.repositories.ManagerRepository;
import com.playground.api.repositories.UserRepository;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired
	private ManagerRepository managerRepository; 
	@Autowired
	private ResponseDto responseDto; 
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private EmployeeRepository employeeRepository; 
	
	@PostMapping("/employee/post")
	public ResponseEntity<ResponseDto> postEmployeeCsvData(@RequestBody EmployeeDto[] dtoArry ) {
		System.out.println("api called..");
		for(EmployeeDto dto : dtoArry) {
			Employee employee = employeeRepository.getByEmail(dto.getEmail());
			if(employee == null) {
				//convert into Employee Model
				Employee e= new Employee();
				e.setName(dto.getName());
				e.setJobTitle(dto.getJobTitle());
				e.setTotalLeaves(dto.getTotalLeaves());
				e.setLeavesLeft(dto.getLeavesLeft());
				
				//fetch Manager by name 
				Manager manager = managerRepository.findManagerByName(dto.getManagerName());
				if(manager == null) {
					responseDto.setMsg("Please add manager in records");
					return ResponseEntity.status(HttpStatus.BAD_REQUEST)
							.body(responseDto);
				}
				
				e.setManager(manager);
				
				//find User by Username 
				User user = userRepository.findUserByUsername(dto.getEmail());
				if(user == null) {
					user = new User();
					user.setUsername(dto.getEmail());
					user.setPassword(passwordEncoder.encode(dto.getPassword()));
					user.setEnabled(false);
					user.setRole("EMPLOYEE");
					userRepository.save(user);
				}
				
				e.setUser(user);
				
				employeeRepository.save(e);
			}
			else {
				employee.setName(dto.getName());
				employee.setJobTitle(dto.getJobTitle());
				employee.setTotalLeaves(dto.getTotalLeaves());
				employee.setLeavesLeft(dto.getLeavesLeft());
				//fetch Manager by name 
				Manager manager = managerRepository.findManagerByName(dto.getManagerName());
				if(manager == null) {
					responseDto.setMsg("Please add manager in records");
					return ResponseEntity.status(HttpStatus.BAD_REQUEST)
							.body(responseDto);
				}
				
				employee.setManager(manager);
				
				//find User by Username 
				User user = userRepository.findUserByUsername(dto.getEmail());
				if(user == null) {
					user = new User();
					user.setUsername(dto.getEmail());
					user.setPassword(passwordEncoder.encode(dto.getPassword()));
					user.setEnabled(false);
					user.setRole("EMPLOYEE");
				}
				
				employee.setUser(user);
				
				employeeRepository.save(employee);
			}
		}
		
		responseDto.setMsg("Operation Successful");
		return ResponseEntity.status(HttpStatus.OK)
				.body(responseDto);

	}
}

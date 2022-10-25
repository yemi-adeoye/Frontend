package com.playground.api.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.playground.api.dto.EmployeeDto;
import com.playground.api.dto.ManagerDto;
import com.playground.api.model.Employee;
import com.playground.api.model.Manager;
import com.playground.api.model.User;
import com.playground.api.repositories.EmployeeRepository;
import com.playground.api.repositories.ManagerRepository;
import com.playground.api.repositories.UserRepository;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private ManagerRepository managerRepository;
	
	@GetMapping("/login")
	public ResponseEntity<String> login(Principal principal) { //Injecting Principal Interface: DI(Dependency Injection)
		String username = principal.getName();
		User user = userRepository.findUserByUsername(username);
		if(user == null)
			return ResponseEntity
						.status(HttpStatus.UNAUTHORIZED)
						.body("Invalid Credentials");
		
		return ResponseEntity
					.status(HttpStatus.OK)
					.body("Login Success");
		
	}
	
	@GetMapping("/user")
	public ResponseEntity<Object> getUser(Principal principal) {
		String username = principal.getName();
		User user = userRepository.findUserByUsername(username);
		System.out.println(user);
		if(user.getRole().equalsIgnoreCase("EMPLOYEE")) {
			//fetch employee details by username
			Employee employee = employeeRepository.getByEmail(user.getUsername());
			System.out.println(employee);
			EmployeeDto dto = EmployeeDto.convertToSingleDto(employee);
			return ResponseEntity
						.status(HttpStatus.OK)
						.body(dto);
 		}
		else {
			//fetch manager details by username
			Manager manager = managerRepository.getByEmail(user.getUsername());
			ManagerDto dto = ManagerDto.convertToDto(manager);
			return ResponseEntity
					.status(HttpStatus.OK)
					.body(dto);
		}
	}
}

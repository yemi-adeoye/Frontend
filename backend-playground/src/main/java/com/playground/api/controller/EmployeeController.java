package com.playground.api.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.playground.api.dto.EmployeeDto;
import com.playground.api.model.Employee;
import com.playground.api.model.Manager;
import com.playground.api.model.User;
import com.playground.api.repositories.EmployeeRepository;
import com.playground.api.repositories.ManagerRepository;
import com.playground.api.repositories.UserRepository;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
	
	@Autowired
	ManagerRepository managerRepository;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder encoder; 
	
	@PostMapping("/add")
	public ResponseEntity<String> addEmployee(@RequestBody EmployeeDto dto) {
		 
		/* managerEmail is valid */
		Manager manager = managerRepository.getByEmail(dto.getManagerEmail());
		if(manager == null)
				return ResponseEntity
						.status(HttpStatus.BAD_REQUEST)
						.body("Manager Email Invalid");
		
		/* Employee email is not already present */
		Employee employee = employeeRepository.getByEmail(dto.getEmail());
		if(! (employee == null) )
				return ResponseEntity
						.status(HttpStatus.BAD_REQUEST)
						.body("Employee Already Exists");
		
		/* Password is encrypted */
		 String encryptedPassword =encoder.encode(dto.getPassword());
		
		/* Save record in employee and user table */
		User user = new User();
		user.setUsername(dto.getEmail());
		user.setPassword(encryptedPassword);
		user.setRole("EMPLOYEE");
		user = userRepository.save(user);
		
		employee = new Employee();
		employee.setUser(user);
		employee.setName(dto.getName());
		employee.setJobTitle(dto.getJobTitle());
		employee.setManager(manager);
		employeeRepository.save(employee);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("Employee Record Added");
	}
	
	@GetMapping("/all")
	public List<EmployeeDto> getAllEmployeeByManagerEmail(Principal principal) {
		String managerEmail = principal.getName();
		List<EmployeeDto> listDto = new ArrayList<>();
		
		List<Employee> list = employeeRepository.getAllEmployeeByManager(managerEmail);
		/* Iterate over the list and convert each employee object to dto  */
		/* We add dto to listDto */
		
		for(Employee e : list) {
			EmployeeDto dto = new EmployeeDto();
			//Conversion
			dto.setId(e.getId());
			dto.setEmail(e.getUser().getUsername());
			dto.setPassword("");
			dto.setJobTitle(e.getJobTitle());
			dto.setManagerEmail(e.getManager().getUser().getUsername());
			dto.setRole(e.getUser().getRole());
			dto.setLeavesLeft(e.getLeavesLeft());
			dto.setTotalLeaves(e.getTotalLeaves());
			dto.setName(e.getName());
			listDto.add(dto);
		}
		return listDto; 
	}
}

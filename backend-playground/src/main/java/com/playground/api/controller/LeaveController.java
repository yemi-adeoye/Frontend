package com.playground.api.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.playground.api.dto.LeaveDto;
import com.playground.api.dto.ResponseDto;
import com.playground.api.enums.LeaveEnum;
import com.playground.api.model.Employee;
import com.playground.api.model.Leave;
import com.playground.api.repositories.EmployeeRepository;
import com.playground.api.repositories.LeaveRepository;

@RestController
@RequestMapping("/api/leave")
@CrossOrigin(origins = {"http://localhost:4200"})
public class LeaveController {
	
	@Autowired
	private LeaveRepository leaveRepository; 
	@Autowired
	private EmployeeRepository employeeRepository; 
	@Autowired
	private ResponseDto responseDto; 
	@PostMapping("/add")
	public ResponseEntity<ResponseDto> addLeave(@RequestBody LeaveDto leaveDto, Principal principal) {
		String username = principal.getName();
		Employee employee = employeeRepository.getByEmail(username);
		
		Leave leave = new Leave();
		leave.setFrom(leaveDto.getFrom());
		leave.setTo(leaveDto.getTo());
		leave.setDays(leaveDto.getDays());
		leave.setEmployee(employee);
		leave.setStatus(LeaveEnum.PENDING);
		leaveRepository.save(leave);
		responseDto.setMsg("Leave added");
		return ResponseEntity.status(HttpStatus.OK).body(responseDto);
	}
	
	
	
}

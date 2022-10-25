package com.playground.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.playground.api.repositories.LeaveRepository;

@RestController
@RequestMapping("/api/leave")
public class LeaveController {
	
	@Autowired
	private LeaveRepository leaveRepository; 
	
	@PostMapping("/add")
	public void addLeave() {
		
	}
	
}

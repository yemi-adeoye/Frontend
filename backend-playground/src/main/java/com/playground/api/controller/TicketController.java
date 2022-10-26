package com.playground.api.controller;

import java.security.Principal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.playground.api.dto.ResponseDto;
import com.playground.api.dto.TicketDto;
import com.playground.api.enums.PriorityEnum;
import com.playground.api.enums.TicketStatus;
import com.playground.api.model.Employee;
import com.playground.api.model.Ticket;
import com.playground.api.repositories.EmployeeRepository;
import com.playground.api.repositories.TicketRepository;

@RestController
@RequestMapping("/api/ticket")
public class TicketController {

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private TicketRepository ticketRepository; 
	@Autowired
	private ResponseDto responseDto;
	
	@PostMapping("/add")
	public ResponseEntity<ResponseDto> postTicket(@RequestBody TicketDto dto, Principal principal) {
		String username = principal.getName();
		
		/* Assigning dto values to Ticket model */
		Ticket ticket = new Ticket();
		ticket.setIssue(dto.getIssue());
		ticket.setPriority(PriorityEnum.valueOf(dto.getPriority()));
		ticket.setGenaratedDate(LocalDate.now());
		ticket.setStatus(TicketStatus.OPEN);
		
		/* Fetch employee by Username */
		Employee employee = employeeRepository.getByEmail(username);
		
		responseDto.setMsg("Invalid Request/Data");
		if(employee == null)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(responseDto);
		
		/* Attach employee to ticket */
		ticket.setEmployee(employee);
		
		/* persist ticket */
		ticketRepository.save(ticket);
		
		/* Send the response */
		responseDto.setMsg("Ticket generated"); 
		return ResponseEntity.status(HttpStatus.OK)
						.body(responseDto);
	}
	
	@GetMapping("/priority/all")
	public List<String> getAllPriorities() {
		List<String> list = new ArrayList<>();
		for(PriorityEnum val : PriorityEnum.values()) {
			list.add(val.toString());
		}
		
		return list; 
	}
}

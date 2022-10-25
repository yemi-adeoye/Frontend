package com.playground.api.dto;

public class EmployeeDto {
	private String name;
	private String jobTitle;
	private String managerEmail;
	private String email;
	private String password;
	private Long id; 
	private String role;
	private int leavesLeft;
	private int totalLeaves;
	
	
	public EmployeeDto() { }

	public EmployeeDto(String name, String jobTitle, String managerEmail, String email, String password) {
		super();
		this.name = name;
		this.jobTitle = jobTitle;
		this.managerEmail = managerEmail;
		this.email = email;
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getManagerEmail() {
		return managerEmail;
	}

	public void setManagerEmail(String managerEmail) {
		this.managerEmail = managerEmail;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getLeavesLeft() {
		return leavesLeft;
	}

	public void setLeavesLeft(int leavesLeft) {
		this.leavesLeft = leavesLeft;
	}

	public int getTotalLeaves() {
		return totalLeaves;
	}

	public void setTotalLeaves(int totalLeaves) {
		this.totalLeaves = totalLeaves;
	}

	@Override
	public String toString() {
		return "EmployeeDto [name=" + name + ", jobTitle=" + jobTitle + ", managerEmail=" + managerEmail + ", email="
				+ email + ", password=" + password + "]";
	}

	
}

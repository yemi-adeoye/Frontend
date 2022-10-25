package com.playground.api.dto;

import com.playground.api.model.Manager;

public class ManagerDto {
	private Long id;
	private String name;
	private String email;
	private String password;
	private String imageUrl;
	private String jobTitle;
	private String role;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "ManagerDto [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", imageUrl="
				+ imageUrl + ", jobTitle=" + jobTitle + ", role=" + role + "]";
	}

	
	public static ManagerDto convertToDto(Manager manager) {
		ManagerDto dto = new ManagerDto();
		dto.setId(manager.getId());
		dto.setEmail(manager.getUser().getUsername());
		dto.setName(manager.getName());
		dto.setJobTitle(manager.getJobTitle());
		dto.setRole(manager.getUser().getRole());
		return dto;  
	}
}

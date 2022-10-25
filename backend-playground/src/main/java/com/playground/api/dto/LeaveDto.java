package com.playground.api.dto;

import java.time.LocalDate;

public class LeaveDto {
	private Long id;
	private LocalDate from;
	private LocalDate to;
	private Integer days;
	private String status;
	private String comments;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getFrom() {
		return from;
	}

	public void setFrom(LocalDate from) {
		this.from = from;
	}

	public LocalDate getTo() {
		return to;
	}

	public void setTo(LocalDate to) {
		this.to = to;
	}

	public Integer getDays() {
		return days;
	}

	public void setDays(Integer days) {
		this.days = days;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "LeaveDto [id=" + id + ", from=" + from + ", to=" + to + ", days=" + days + ", status=" + status
				+ ", comments=" + comments + "]";
	}

	
}

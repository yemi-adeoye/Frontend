package com.playground.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.playground.api.model.Leave;

public interface LeaveRepository extends JpaRepository<Leave, Long>{

}

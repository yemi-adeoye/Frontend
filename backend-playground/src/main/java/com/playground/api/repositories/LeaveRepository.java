package com.playground.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.playground.api.enums.LeaveEnum;
import com.playground.api.model.Leave;

public interface LeaveRepository extends JpaRepository<Leave, Long>{

	@Query("select l from Leave l where l.employee.user.username=?1 AND l.status = ?2")
	List<Leave> getLeavesByEmployeeUsername(String username,LeaveEnum status);

}

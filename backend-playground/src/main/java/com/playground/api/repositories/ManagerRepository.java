package com.playground.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.playground.api.model.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Long>{

	@Query("select m from Manager m where m.user.username=?1")
	Manager getByEmail(String managerEmail);

	@Query("select m from Manager m where m.name=?1")
	Manager findManagerByName(String managerName);

}

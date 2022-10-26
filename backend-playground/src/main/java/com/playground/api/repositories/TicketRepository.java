package com.playground.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.playground.api.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long>{

}

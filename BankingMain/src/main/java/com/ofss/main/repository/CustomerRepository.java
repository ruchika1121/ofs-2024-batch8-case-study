package com.ofss.main.repository;

import java.util.Map;

import org.springframework.data.repository.CrudRepository;

import com.fasterxml.jackson.databind.JsonNode;
import com.ofss.main.domain.Customer;


public interface CustomerRepository extends CrudRepository<Customer, Integer>{
	
	public Customer findByUsername(String username);
}

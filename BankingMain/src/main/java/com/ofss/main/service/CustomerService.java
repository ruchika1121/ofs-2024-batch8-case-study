package com.ofss.main.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.JsonNode;
import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;

public interface CustomerService {
	public Customer register(Customer customer);
	public ArrayList<Customer> getCustomers();
	public Customer login(Map<String, Object> customer);

	
}

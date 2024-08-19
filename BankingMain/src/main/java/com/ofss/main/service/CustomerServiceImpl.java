package com.ofss.main.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.fasterxml.jackson.databind.JsonNode;
import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public Customer register(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public ArrayList<Customer> getCustomers() {
		return (ArrayList<Customer>) customerRepository.findAll();
	}

	@Override
	public Customer login(Map<String, Object> customer) {
		String name= (String) customer.get("username");
		String password = (String) customer.get("password");
		Customer customer1=customerRepository.findByUsername(name);
		
		if (customer1!=null) {
			if(customer1.getStatus().equalsIgnoreCase("Blocked")) {
				return customer1;
			}
			else {
			if(customer1.getPassword().equals(password)) {
				customer1.setNo_of_attempts(0);
				customer1=customerRepository.save(customer1);
				return customer1;
			}
			else {
				if(customer1.getNo_of_attempts()>=3) {
					customer1.setStatus("Blocked");
					customer1=customerRepository.save(customer1);
					return customer1;
				}
				customer1.setNo_of_attempts(customer1.getNo_of_attempts()+1);
				customer1=customerRepository.save(customer1);
				return customer1;
			}
			}
		}
		else {
			Customer customer2 = new Customer();
			customer2.setUsername("Invalid Username");
			System.out.println(customer2);
			return customer2;
		}
	}







}

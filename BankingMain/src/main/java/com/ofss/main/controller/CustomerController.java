package com.ofss.main.controller;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.ofss.main.domain.Customer;
import com.ofss.main.service.CustomerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("bankingmain")
public class CustomerController {
	
	//  http://localhost:8080/bankingmain/customer
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("customer")
	private Customer register(@RequestBody Customer customer) {
		return customerService.register(customer);
	}
	
	@GetMapping("customer")
	private ArrayList<Customer> getCustomers(){
		return customerService.getCustomers();
	}
	
	@PostMapping("customer/login")
	private Customer login(@RequestBody Map<String, Object> customer) {
		System.out.println("Inside");
		System.out.println(customer);
		return customerService.login(customer);
	}
}

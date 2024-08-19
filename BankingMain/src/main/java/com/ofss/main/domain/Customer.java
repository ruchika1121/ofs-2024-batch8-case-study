package com.ofss.main.domain;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "customer_id")
	private int customerId;

	@Column(name = "first_name")
	private String first_name;

	@Column(name = "last_name")
	private String last_name;

	@Column(name = "username")
	private String username;

	@Column(name = "address_line1")
	private String address_1;

	@Column(name = "address_line2")
	private String address_2;

	@Column(name = "address_line3")
	private String address_3;

	@Column(name = "city")
	private String city;

	@Column(name = "state_")
	private String state;

	@Column(name = "pin_code")
	private int pin_code;

	@Column(name = "phone")
	private long phone_number;

	@Column(name = "password")
	private String password;

	@Column(name = "email")
	private String email;

	@Column(name = "status")
	private String status;

	@Column(name = "int_of_attempts")
	private int no_of_attempts;

	@OneToMany(mappedBy = "customer",cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Account> allAccounts;
	
	public Customer(String first_name, String last_name, String username, String address_1, String address_2,
			String address_3, String city, String state, int pin_code, long phone_number, String password,
			String email) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = username;
		this.address_1 = address_1;
		this.address_2 = address_2;
		this.address_3 = address_3;
		this.city = city;
		this.state = state;
		this.pin_code = pin_code;
		this.phone_number = phone_number;
		this.password = password;
		this.email = email;
	}

	public Customer() {

	}

	public Customer(int customer_id) {
		this.customerId = customer_id;
	}

	public int getCustomer_id() {
		return customerId;
	}

	public void setCustomer_id(int customer_id) {
		this.customerId = customer_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getAddress_1() {
		return address_1;
	}

	public void setAddress_1(String address_1) {
		this.address_1 = address_1;
	}

	public String getAddress_2() {
		return address_2;
	}

	public void setAddress_2(String address_2) {
		this.address_2 = address_2;
	}

	public String getAddress_3() {
		return address_3;
	}

	public void setAddress_3(String address_3) {
		this.address_3 = address_3;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPin_code() {
		return pin_code;
	}

	public void setPin_code(int pin_code) {
		this.pin_code = pin_code;
	}

	public long getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(long phone_number) {
		this.phone_number = phone_number;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getNo_of_attempts() {
		return no_of_attempts;
	}

	public void setNo_of_attempts(int no_of_attempts) {
		this.no_of_attempts = no_of_attempts;
	}
	

	public List<Account> getAllAccounts() {
		return allAccounts;
	}

	public void setAllAccounts(List<Account> allAccounts) {
		this.allAccounts = allAccounts;
	}

	@Override
	public String toString() {
		return "Customer [customer_id=" + customerId + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", username=" + username + ", address_1=" + address_1 + ", address_2=" + address_2 + ", address_3="
				+ address_3 + ", city=" + city + ", state=" + state + ", pin_code=" + pin_code + ", phone_number="
				+ phone_number + ", password=" + password + ", email=" + email + "]";
	}

}

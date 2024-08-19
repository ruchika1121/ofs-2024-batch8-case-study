package com.ofss.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.repository.AccountRepository;

@Service
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	AccountRepository accountRepository;
	@Override
	public List<Account> getAccounts(Customer customer) {
		return accountRepository.findAccountByCustomer(customer);
	}
	@Override
	public Account addAccount(Account account) {
		return accountRepository.save(account);
	}
	@Override
	public List<Account> getAllAccounts() {
		return (List<Account>) accountRepository.findAll();
	}
}

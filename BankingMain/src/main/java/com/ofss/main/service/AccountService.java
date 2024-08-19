package com.ofss.main.service;

import java.util.List;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;

public interface AccountService {

	public List<Account> getAccounts(Customer customer);
	public List<Account> getAllAccounts();
	public Account addAccount(Account account);
}

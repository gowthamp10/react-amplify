package com.bank.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.daos.AccountRepository;
import com.bank.daos.CustomerRepository;
import com.bank.daos.TransactionRepository;
import com.bank.entities.Account;
import com.bank.entities.Transactions;

@Service
public class AccountService {
	@Autowired AccountRepository dao;
	@Autowired TransactionRepository tdao;
	@Autowired CustomerRepository cdao;
	
	public List<Account> allAccounts() {
		return dao.findAll();
	}
	
	public Account findByAccno(int accno) {
		Optional<Account> account= dao.findById(accno);
		if(account.isPresent() && account.get().isActive())
			return dao.findById(accno).get();
		else
			return null;
	}
	
	public Account findDeactiateByAccno(int accno) {
		Optional<Account> account= dao.findById(accno);
		if(account.isPresent())
			return dao.findById(accno).get();
		else
			return null;
	}
	
	public void activate(int accno) {
		Account account= dao.findById(accno).get();
		account.setActive(true);
		dao.save(account);
	}
	
	public void deactivate(int accno) {
		Account account= dao.findById(accno).get();
		account.setActive(true);
		dao.save(account);
	}
	
	public void openAccount(Account acc) {
		acc.setActive(true);	
		acc.setAccno(generateAccno());
		dao.save(acc);
		tdao.save(new Transactions(LocalDate.now(), "Account Open",  acc.getBalance(),0, acc));
	}
	//
	public boolean deleteAccount(int accno) {
		Optional<Account> account= dao.findById(accno);
		if(account.isPresent()) {
			dao.deleteById(accno);
			return true;
		}
		return false;
	}
	
	public int generateAccno() {
		return dao.count()==0 ? 10001 : dao.generateAccountNo();
	}
	
	public Account findByCustomerId(int cid) {
		return dao.findByCustomerId(cid);
	}
}

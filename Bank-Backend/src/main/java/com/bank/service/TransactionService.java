package com.bank.service;


import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.daos.AccountRepository;
import com.bank.daos.TransactionRepository;
import com.bank.entities.Account;
import com.bank.entities.Transactions;
import com.bank.models.TransactionDTO;

@Service
public class TransactionService {
	@Autowired TransactionRepository dao;
	@Autowired AccountRepository adao;
	@Autowired CustomerService cservice;
	@Autowired AccountService aservice;
	
	public void saveEntry(TransactionDTO dto) {
		Transactions tran=TransactionDTO.toEntity(dto);
		tran.setAccount(adao.findById(dto.getAccno()).get());
		dao.save(tran);
	}
	
	public void deposit(TransactionDTO dto) {
		System.out.println(dto);
		Transactions tran=TransactionDTO.toEntity(dto);
		Account account=adao.findById(dto.getAccno()).get();
		tran.setAccount(account);
		dao.save(tran);
		account.setBalance(account.getBalance()+tran.getCramount());
		adao.save(account);
	}
	public void withdraw(TransactionDTO dto) {	
		Transactions tran=TransactionDTO.toEntity(dto);
		Account account=adao.findById(dto.getAccno()).get();
		tran.setAccount(account);
		dao.save(tran);
		account.setBalance(account.getBalance()-tran.getDramount());
		adao.save(account);
	}
	
	public void transfer(TransactionDTO dto) {
		
		Transactions t1=TransactionDTO.toEntity(dto);
		t1.setDramount(dto.getAmount());
		Account ac1=adao.getById(dto.getAccno());
		t1.setAccount(ac1);
		t1.setTtype("Cash Transferred to "+dto.getRecacc());
		dao.save(t1);
		System.out.println(ac1);
		System.out.println(dto);
		ac1.setBalance(ac1.getBalance()-dto.getAmount());
		adao.save(ac1);
		
		Transactions t2=TransactionDTO.toEntity(dto);
		Account ac2=adao.getById(dto.getRecacc());
		t2.setAccount(ac2);
		t2.setCramount(dto.getAmount());
		t2.setTtype("Cash Transferred from "+dto.getAccno());
		dao.save(t2);
		ac2.setBalance(ac2.getBalance()+dto.getAmount());
		adao.save(ac2);
	}
	
	public List<Transactions> allTransactions(){
		return dao.findAll().stream()
				.sorted(Comparator.comparingInt(Transactions::getId).reversed())
				.collect(Collectors.toList());
	}
	
	public List<Transactions> allHistoryTransactions(int cid){
		Account account=aservice.findByCustomerId(cid);
		return dao.findByAccno(account.getAccno()).stream()
				.sorted(Comparator.comparingInt(Transactions::getId).reversed())
				.collect(Collectors.toList());
	}
	
	public List<Transactions> allAccountTransactions(int accno){
		return dao.findByAccno(accno).stream()
				.sorted(Comparator.comparingInt(Transactions::getId).reversed())
				.collect(Collectors.toList());
	}
	
	
}

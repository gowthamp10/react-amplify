package com.bank.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.entities.Account;
import com.bank.entities.Customer;
import com.bank.entities.Transactions;
import com.bank.models.AccountDTO;
import com.bank.models.KycDTO;
import com.bank.models.KycResponseDTO;
import com.bank.models.Response;
import com.bank.models.TransactionDTO;
import com.bank.models.TransferDTO;
import com.bank.service.AccountService;
import com.bank.service.CustomerService;
import com.bank.service.TransactionService;
import com.bank.service.UsersService;

@CrossOrigin
@RestController
@RequestMapping("/api/accounts")
public class AccountController {
	
	@Autowired CustomerService cservice;
	@Autowired UsersService uservice;
	@Autowired AccountService accservice;
	@Autowired TransactionService tservice;

	@PostMapping
	public ResponseEntity<?> saveAccount(@RequestBody AccountDTO dto) {
		System.out.println(dto);
		Account acc=AccountDTO.toEntity(dto);
		acc.setCustomer(cservice.findById(dto.getCustid()));
		accservice.openAccount(acc);
		return Response.success(acc);
	}
	
	@GetMapping
	public ResponseEntity<?> findAllCustomers() {
		List<Account> result = accservice.allAccounts();
		return Response.success(result);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findCustomerById(@PathVariable("id") int id) {
		Account result = accservice.findByAccno(id);
		KycResponseDTO dto=Account.toEntity(result);
		boolean netbanking=uservice.findUser(result.getCustomer().getEmail()).isActive();
		dto.setNetbanking(netbanking);
		return Response.success(dto);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateCustomerInfo(@PathVariable("id") int id,@RequestBody KycDTO dto) {
		System.out.println(dto);
		cservice.updateCustomer(dto);
		return Response.success("Updated Successfully");
	}
	
	@PostMapping("/deposit")
	public ResponseEntity<?> deposit(@RequestBody TransactionDTO dto) {
		System.out.println(dto);
		tservice.deposit(dto);
		return Response.success(dto);
	}
	@PostMapping("/withdraw")
	public ResponseEntity<?> withdraw(@RequestBody TransactionDTO dto) {
		dto.setTdate(LocalDate.now());
		System.out.println(dto);
		tservice.withdraw(dto);
		return Response.success(dto);
	}
	
	@PostMapping("/transfer")
	public ResponseEntity<?> transfer(@RequestBody TransactionDTO dto) {
		System.out.println(dto);
		tservice.transfer(dto);
		return Response.success(dto);
	}
	
	@GetMapping("/history/{id}")
	public ResponseEntity<?> findHistoryTransactions(@PathVariable("id") int cid) {
		List<Transactions> result = tservice.allHistoryTransactions(cid);
		return Response.success(result);
	}
	
	
	@GetMapping("/all")
	public ResponseEntity<?> allTransactions(){
		List<Transactions> result = tservice.allTransactions();
		return Response.success(result);
	}
	
	@PostMapping("/otransfer")
	public ResponseEntity<?> onlinetransfer(@RequestBody TransferDTO dto) {
		System.out.println(dto);
		return Response.success("Transfer amount successfully");
	}
	@DeleteMapping("/deleteaccount/{accno}")
	public String deleteAccount(@PathVariable("accno") int accno) {
		if(accservice.deleteAccount(accno)) {
			return "User with Id : "+accno+" is found and deleted";
		}
		return "Not found";
	}
	
}

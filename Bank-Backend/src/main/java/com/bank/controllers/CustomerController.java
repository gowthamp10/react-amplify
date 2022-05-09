package com.bank.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bank.entities.Account;
import com.bank.entities.Beneficiary;
import com.bank.entities.Customer;
import com.bank.entities.Users;
import com.bank.models.AccountDTO;
import com.bank.models.BeneficiaryDTO;
import com.bank.models.CustomerDTO;
import com.bank.models.LoginDTO;
import com.bank.models.Response;
import com.bank.service.AccountService;
import com.bank.service.CustomerService;
import com.bank.service.UsersService;

@CrossOrigin
@RestController
@RequestMapping("/api/customers")
public class CustomerController {
	
	@Autowired CustomerService cservice;
	@Autowired UsersService uservice;
	@Autowired AccountService accservice;
	
	@PostMapping
	public ResponseEntity<?> save(CustomerDTO dto) {
		System.out.println(dto);
		Customer cust=CustomerDTO.toEntity(dto);
		System.out.println(cust);
		int cid=cservice.saveCustomer(cust,dto.getPhoto(),dto.getSign());
		Users user=new Users(dto.getEmail(),dto.getCname(),dto.getPwd(),cid,"Customer",false,"Self");
		uservice.AddUser(user);
		return Response.success(cust);
	}
	
	@GetMapping
	public ResponseEntity<?> findAllCustomers() {
		List<Customer> result = cservice.allCustomers();
		return Response.success(result);
	}
	
	@GetMapping("beneficiary/{id}")
	public ResponseEntity<?> findAllBeneficiary(@PathVariable("id") int accno) {
		List<Beneficiary> result = cservice.findByAccount(accno);
		return Response.success(result);
	}
	
	@PostMapping("beneficiary")
	public ResponseEntity<?> saveBeneficiary(@RequestBody BeneficiaryDTO dto) {
		Beneficiary ben=BeneficiaryDTO.toEntity(dto);
		ben.setAccount(accservice.findByCustomerId(dto.getCid()));
		cservice.saveBeneficiary(ben);		
		return Response.success("Beneficiary saved successfully");
	}
	
	@GetMapping("pending")
	public ResponseEntity<?> findPendingCustomers() {
		List<Customer> result = cservice.getPendingCustomers();
		return Response.success(result);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> findCustomerById(@PathVariable("id") int id) {
		Customer result = cservice.findById(id);
		return Response.success(result);
	}
	
	@GetMapping("kyc/{id}")
	public ResponseEntity<?> KycInfo(@PathVariable("id") int id) {
		Account account=accservice.findByAccno(id);
		Customer result = cservice.findById(account.getAccno());
		return Response.success(result);
	}
	
	@GetMapping("account/{id}")
	public ResponseEntity<?> AccountInfo(@PathVariable("id") int id) {
		Customer result = cservice.findById(id);
		Account account=accservice.findByCustomerId(result.getId());
		return Response.success(account);
	}
	
	@PostMapping("changepwd")
	public ResponseEntity<?> save(@RequestBody LoginDTO dto) {
		System.out.println(dto);
		Users user=uservice.findUser(dto.getUserid());
		if(user.getPwd().equals(dto.getOld())) {
			user.setPwd(dto.getPwd());
			uservice.updateUser(user);
			return Response.success(user);
		}else {
			return Response.error("Incorrect current password");
		}
	}
	
}

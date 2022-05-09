package com.bank.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.entities.Account;
import com.bank.models.DashboardDTO;
import com.bank.models.Response;
import com.bank.service.AccountService;
import com.bank.service.CustomerService;
import com.bank.service.TransactionService;
import com.bank.service.UsersService;

@CrossOrigin
@RestController
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired CustomerService cservice;
	@Autowired UsersService uservice;
	@Autowired AccountService accservice;
	@Autowired TransactionService tservice;

	@GetMapping("/dashboard")
	public ResponseEntity<?> dashboardinfo() {
		DashboardDTO result=new DashboardDTO();
		result.setAccounts(accservice.allAccounts().size());
		result.setCustomers(cservice.allCustomers().size());
		result.setUsers(uservice.getAllUsers().size());
		return Response.success(result);
	}
	
}

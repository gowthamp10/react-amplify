package com.bank.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.entities.Users;
import com.bank.models.LoginDTO;
import com.bank.models.Response;
import com.bank.service.UsersService;

@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class HomeController {
	
	@Autowired UsersService uservice;
	
	@PostMapping("/validate")
	public ResponseEntity<?> validateUser(@RequestBody LoginDTO dto) {
		System.out.println(dto);
		Users user=uservice.validate(dto.getUserid(), dto.getPwd());
		if(user!=null)
			return Response.success(user);
		else
			return Response.status(HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/verify")//get the user info
	public ResponseEntity<?> verifyEmail(String email) {
		Users user=uservice.verify(email);
		if(user!=null)
			return Response.error("Not Available");
		else
			return Response.success("Available");
	}

	
}

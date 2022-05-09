package com.bank.models;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ErrorMessage {

	private HttpStatus status;
	private String message;
	public ErrorMessage(HttpStatus status, String message) {
		this.status = status;
		this.message = message;
	}
	
	
}

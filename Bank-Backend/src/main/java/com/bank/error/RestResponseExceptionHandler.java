package com.bank.error;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.bank.models.ErrorMessage;

@ControllerAdvice
@ResponseStatus
public class RestResponseExceptionHandler extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorMessage> getErrorMessage(Exception exception,WebRequest request) {
		
		return ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body(new ErrorMessage(HttpStatus.NOT_FOUND,exception.getMessage()));
	}

}

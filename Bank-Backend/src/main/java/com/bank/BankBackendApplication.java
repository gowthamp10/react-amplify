package com.bank;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.bank.service.UsersService;
import com.bank.utils.FileUploadProperties;

@SpringBootApplication
@EnableConfigurationProperties({
    FileUploadProperties.class
})
@EnableJpaAuditing
public class BankBackendApplication {
	
	private static final Logger log = LoggerFactory.getLogger(BankBackendApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(BankBackendApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(UsersService srv) {
	    return (args) -> {
    		srv.createAdmin();
    		log.info("Admin user created successfully");
	    };
	}

}

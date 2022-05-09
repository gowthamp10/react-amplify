package com.bank.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bank.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	@Query(value = "SELECT * FROM Customer c WHERE c.id not in (SELECT a.customerid FROM Account a)",nativeQuery=true)
	List<Customer> findPendingCustomer();
}

package com.bank.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bank.entities.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
	@Query("SELECT max(accno)+1 FROM Account")
	int generateAccountNo();
	
	@Query(value="SELECT * FROM Account p WHERE customerid=?1",nativeQuery = true)
	Account findByCustomerId(int cid);
}

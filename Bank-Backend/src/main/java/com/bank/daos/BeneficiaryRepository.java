package com.bank.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bank.entities.Account;
import com.bank.entities.Beneficiary;

@Repository
public interface BeneficiaryRepository extends JpaRepository<Beneficiary, Integer> {
	
	
	@Query(value="SELECT * from Beneficiary b WHERE b.accountno=?1",nativeQuery = true)
	List<Beneficiary> findByAccount(int accountno);
}

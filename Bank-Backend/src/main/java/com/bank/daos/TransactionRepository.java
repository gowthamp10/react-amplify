package com.bank.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bank.entities.Transactions;

@Repository
public interface TransactionRepository extends JpaRepository<Transactions, Integer> {

	@Query(value="SELECT * FROM Transactions t WHERE t.accountno=?1",nativeQuery = true)
	List<Transactions> findByAccno(int accno);
}

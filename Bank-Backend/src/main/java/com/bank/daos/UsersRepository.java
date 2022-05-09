package com.bank.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.entities.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, String> {

	Users findByCid(int cid);
}

package com.bank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bank.daos.BeneficiaryRepository;
import com.bank.daos.CustomerRepository;
import com.bank.entities.Account;
import com.bank.entities.Beneficiary;
import com.bank.entities.Customer;
import com.bank.entities.Users;
import com.bank.models.KycDTO;
import com.bank.utils.StorageService;

@Service
public class CustomerService {

	@Autowired private CustomerRepository repo;
	@Autowired private StorageService storageService;
	@Autowired private BeneficiaryRepository dao;
	@Autowired private AccountService asrv;
	@Autowired private UsersService uservice;
	
	public int saveCustomer(Customer cust,MultipartFile photo,MultipartFile sign) {
		String cphoto=storageService.store(photo);
		String csign=storageService.store(sign);
		cust.setPhoto(cphoto);
		Customer cc= repo.save(cust);
		return cc.getId();
	}
	
	public void updateCustomer(KycDTO dto) {
		Account acc=asrv.findByAccno(dto.getAccno());
		Customer cust=acc.getCustomer();
		cust.setAddress(dto.getAddress());
		cust.setCname(dto.getCname());
		cust.setEmail(dto.getEmail());
		cust.setGender(dto.getGender());
		cust.setPhone(dto.getPhone());
		System.out.println(cust);
		repo.save(cust);
		Users user=uservice.findByCid(cust.getId());
		user.setActive(dto.isNetbanking());
		uservice.AddUser(user);
	}
	
	public List<Customer> allCustomers(){
		return repo.findAll();
	}
	
	public Customer findById(int id) {
		return repo.getById(id);
	}
	
	public List<Customer> getPendingCustomers(){
		return repo.findPendingCustomer();
	}
	
	public List<Beneficiary> findByAccount(int cid){
		Account account=asrv.findByCustomerId(cid);
		return dao.findByAccount(account.getAccno());
	}
	
	public void saveBeneficiary(Beneficiary b) {
		dao.save(b);
	}
}

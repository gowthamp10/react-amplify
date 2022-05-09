package com.bank.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.beans.BeanUtils;

import com.bank.models.KycResponseDTO;

@Entity
public class Account {

	@Id
	private int accno;
	private String actype;
	private float balance;
	private boolean active;
	private int minbal;
	private String createdby;
	private LocalDateTime createdon;
	
	@ManyToOne
	@JoinColumn(name="customerid")
	private Customer customer;
	
	public Account() {
		this.createdon=LocalDateTime.now();
		this.createdby="System";
	}

	public String getCreatedby() {
		return createdby;
	}

	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}

	public LocalDateTime getCreatedon() {
		return createdon;
	}

	public void setCreatedon(LocalDateTime createdon) {
		this.createdon = createdon;
	}

	public int getAccno() {
		return accno;
	}

	public void setAccno(int accno) {
		this.accno = accno;
	}

	public String getActype() {
		return actype;
	}

	public void setActype(String actype) {
		this.actype = actype;
	}

	public float getBalance() {
		return balance;
	}

	public void setBalance(float balance) {
		this.balance = balance;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public int getMinbal() {
		return minbal;
	}

	public void setMinbal(int minbal) {
		this.minbal = minbal;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "Account [accno=" + accno + ", actype=" + actype + ", balance=" + balance + ", active=" + active
				+ ", minbal=" + minbal + ", customer=" + customer + "]";
	}
	
	public static KycResponseDTO toEntity(Account dto) {
		KycResponseDTO entity=new KycResponseDTO();
		BeanUtils.copyProperties(dto, entity);		
		return entity;
	}
	
}

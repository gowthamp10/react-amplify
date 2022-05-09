package com.bank.models;

import org.springframework.beans.BeanUtils;

import com.bank.entities.Account;
import com.bank.entities.Customer;

public class AccountDTO {
	private String actype;
	private float balance;
	private int minbal;
	private int custid;
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
	public int getMinbal() {
		return minbal;
	}
	public void setMinbal(int minbal) {
		this.minbal = minbal;
	}
	public int getCustid() {
		return custid;
	}
	public void setCustid(int custid) {
		this.custid = custid;
	}
	@Override
	public String toString() {
		return "AccountDTO [actype=" + actype + ", balance=" + balance + ", minbal=" + minbal + ", custid=" + custid
				+ "]";
	}
	
	public static Account toEntity(AccountDTO dto) {
		Account entity=new Account();
		BeanUtils.copyProperties(dto, entity);		
		return entity;
	}
}

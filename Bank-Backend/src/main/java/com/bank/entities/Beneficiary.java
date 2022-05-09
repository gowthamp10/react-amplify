package com.bank.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Beneficiary {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String bname;
	private String bankname;
	private String ifsc;
	private int maxlimit;
	private int accno;
	@ManyToOne
	@JoinColumn(name="accountno")
	private Account account;
	private LocalDateTime createdon;
	
	public Beneficiary() {
		this.createdon=LocalDateTime.now();
	}
	
	public int getAccno() {
		return accno;
	}

	public void setAccno(int accno) {
		this.accno = accno;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public String getBankname() {
		return bankname;
	}
	public void setBankname(String bankname) {
		this.bankname = bankname;
	}
	public String getIfsc() {
		return ifsc;
	}
	public void setIfsc(String ifsc) {
		this.ifsc = ifsc;
	}
	public int getMaxlimit() {
		return maxlimit;
	}
	public void setMaxlimit(int maxlimit) {
		this.maxlimit = maxlimit;
	}
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	}
	public LocalDateTime getCreatedon() {
		return createdon;
	}
	public void setCreatedon(LocalDateTime createdon) {
		this.createdon = createdon;
	}
	@Override
	public String toString() {
		return "Beneficiary [id=" + id + ", bname=" + bname + ", bankname=" + bankname + ", ifsc=" + ifsc
				+ ", maxlimit=" + maxlimit + ", account=" + account + ", createdon=" + createdon + "]";
	}
	
	
}

package com.bank.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Transactions {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@JsonFormat(pattern = "YYYY-MM-dd")
	private LocalDate tdate;
	private String ttype;
	private float cramount;
	private float dramount;
	private String createdby;
	private LocalDateTime createdon;
	@ManyToOne
	@JoinColumn(name="accountno")
	private Account account;
	
	public Transactions(LocalDate tdate, String ttype, float cramount, float dramount, Account account) {
		this.tdate = tdate;
		this.ttype = ttype;
		this.cramount = cramount;
		this.dramount = dramount;
		this.account = account;
	}
	
	public Transactions() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public LocalDate getTdate() {
		return tdate;
	}
	public void setTdate(LocalDate tdate) {
		this.tdate = tdate;
	}
	public String getTtype() {
		return ttype;
	}
	public void setTtype(String ttype) {
		this.ttype = ttype;
	}
	public float getCramount() {
		return cramount;
	}
	public void setCramount(float cramount) {
		this.cramount = cramount;
	}
	public float getDramount() {
		return dramount;
	}
	public void setDramount(float dramount) {
		this.dramount = dramount;
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
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	}
	@Override
	public String toString() {
		return "Transactions [id=" + id + ", tdate=" + tdate + ", ttype=" + ttype + ", cramount=" + cramount
				+ ", dramount=" + dramount + ", createdby=" + createdby + ", createdon=" + createdon + ", account="
				+ account + "]";
	}
	
	
}

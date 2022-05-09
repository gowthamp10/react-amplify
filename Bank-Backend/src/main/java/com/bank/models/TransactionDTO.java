package com.bank.models;

import java.time.LocalDate;

import org.springframework.beans.BeanUtils;

import com.bank.entities.Transactions;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

public class TransactionDTO {
	
	@JsonFormat(pattern = "yyyy-MM-dd",shape=Shape.STRING)
	private LocalDate tdate;
	private String ttype;	
	private int accno;
	private float dramount;
	private float cramount;
	private int recacc;
	private int amount;
	

	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public int getRecacc() {
		return recacc;
	}
	public void setRecacc(int recacc) {
		this.recacc = recacc;
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
	public int getAccno() {
		return accno;
	}
	public void setAccno(int accno) {
		this.accno = accno;
	}
	public float getDramount() {
		return dramount;
	}
	public void setDramount(float dramount) {
		this.dramount = dramount;
	}
	public float getCramount() {
		return cramount;
	}
	public void setCramount(float cramount) {
		this.cramount = cramount;
	}
	@Override
	public String toString() {
		return "TransactionDTO [tdate=" + tdate + ", ttype=" + ttype + ", accno=" + accno + ", dramount=" + dramount
				+ ", cramount=" + cramount + "]";
	}
	
	public static Transactions toEntity(TransactionDTO dto) {
		Transactions entity=new Transactions();
		BeanUtils.copyProperties(dto, entity);		
		return entity;
	}
	
}

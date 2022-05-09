package com.bank.models;

public class TransferDTO {
	private int accno;
	private String remarks;
	private int bid;
	private int dramount;
	public int getAccno() {
		return accno;
	}
	public void setAccno(int accno) {
		this.accno = accno;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public int getBid() {
		return bid;
	}
	public void setBid(int bid) {
		this.bid = bid;
	}
	public int getDramount() {
		return dramount;
	}
	public void setDramount(int dramount) {
		this.dramount = dramount;
	}
	@Override
	public String toString() {
		return "TransferDTO [accno=" + accno + ", remarks=" + remarks + ", bid=" + bid + ", dramount=" + dramount + "]";
	}
	
	
}

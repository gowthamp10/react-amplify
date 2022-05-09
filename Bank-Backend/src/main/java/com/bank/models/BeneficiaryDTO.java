package com.bank.models;

import org.springframework.beans.BeanUtils;

import com.bank.entities.Beneficiary;

public class BeneficiaryDTO {
	private String bname;
	private String bankname;
	private String ifsc;
	private int maxlimit;
	private int cid;
	private int accno;
	
	public int getAccno() {
		return accno;
	}
	public void setAccno(int accno) {
		this.accno = accno;
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
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	@Override
	public String toString() {
		return "BeneficiaryDTO [bname=" + bname + ", bankname=" + bankname + ", ifsc=" + ifsc + ", maxlimit=" + maxlimit
				+ ", cid=" + cid + "]";
	}
	
	public static Beneficiary toEntity(BeneficiaryDTO dto) {
		Beneficiary entity=new Beneficiary();
		BeanUtils.copyProperties(dto, entity);		
		return entity;
	}
	
	
}

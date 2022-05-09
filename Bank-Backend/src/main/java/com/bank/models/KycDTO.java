package com.bank.models;

public class KycDTO {
	
	private int accno;
	private String cname;
	private String address;
	private String gender;
	private String phone;
	private String email;
	private boolean netbanking;
	public int getAccno() {
		return accno;
	}
	public void setAccno(int accno) {
		this.accno = accno;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean isNetbanking() {
		return netbanking;
	}
	public void setNetbanking(boolean netbanking) {
		this.netbanking = netbanking;
	}
	@Override
	public String toString() {
		return "KycDTO [accno=" + accno + ", cname=" + cname + ", address=" + address + ", gender=" + gender
				+ ", phone=" + phone + ", email=" + email + ", netbanking=" + netbanking + "]";
	}
	
	
	
}

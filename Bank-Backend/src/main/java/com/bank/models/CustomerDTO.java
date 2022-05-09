package com.bank.models;

import java.time.LocalDate;

import javax.persistence.Column;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.bank.entities.Customer;
import com.fasterxml.jackson.annotation.JsonFormat;

public class CustomerDTO {

	private int id;
	private String cname;
	private String address;
	private String gender;
	@JsonFormat(pattern = "YYYY-MM-dd")
	private LocalDate dob;
	private String adhar;
	private String phone;
	private String email;
	private String source;
	private String pwd;
	
	private MultipartFile photo;
	private MultipartFile sign;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
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
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getAdhar() {
		return adhar;
	}
	public void setAdhar(String adhar) {
		this.adhar = adhar;
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
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	
	public MultipartFile getPhoto() {
		return photo;
	}
	public void setPhoto(MultipartFile photo) {
		this.photo = photo;
	}
	public MultipartFile getSign() {
		return sign;
	}
	public void setSign(MultipartFile sign) {
		this.sign = sign;
	}
	@Override
	public String toString() {
		return "CustomerDTO [id=" + id + ", cname=" + cname + ", address=" + address + ", gender=" + gender + ", dob="
				+ dob + ", adhar=" + adhar + ", phone=" + phone + ", email=" + email + ", source=" + source + "]";
	}
	
	public static Customer toEntity(CustomerDTO dto) {
		Customer entity=new Customer();
		BeanUtils.copyProperties(dto, entity,"photo","sign");		
		return entity;
	}
}

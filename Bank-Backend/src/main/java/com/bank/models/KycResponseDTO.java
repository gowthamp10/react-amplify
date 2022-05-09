package com.bank.models;

import com.bank.entities.Account;

public class KycResponseDTO extends Account {
	
	private boolean netbanking;

	public boolean isNetbanking() {
		return netbanking;
	}

	public void setNetbanking(boolean netbanking) {
		this.netbanking = netbanking;
	}

	
	
}

//package com.example.entity;
//
//public class Taxentity {
//
//}
package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class Taxentity {

	@Id
	private  String username;
	private String password;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Taxentity(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public Taxentity()
	{
		
	}
	

}
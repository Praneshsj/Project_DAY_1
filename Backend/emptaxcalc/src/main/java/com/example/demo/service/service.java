package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.entity;
import com.example.demo.repo.repo;

@Service
public class service {

	
	@Autowired(required=true)
	repo r;
	
	public String add(entity e)
	{
		r.save(e);
		return "Added";
	}
	
	
	public List<entity> getDetails()
	{
		return r.findAll();
	}
	
	
	
	public entity updateDetails(entity newUser ,Long id) 
	{
		entity up=r.findById(id).get();		
		 up.setUserrole(newUser.getUserrole());
		 up.setName(newUser.getName());
		 up.setEmail(newUser.getEmail());
         return r.saveAndFlush(up);
	}
	
	
	
	public void deleteDetails(Long id) {
		r.deleteById(id);
	}
	
	
	
	public entity getDetail(Long id) {
		// TODO Auto-generated method stub
		return r.findById(id).get();
	}
	

}

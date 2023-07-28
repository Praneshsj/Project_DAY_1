package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.Repository;
import org.springframework.stereotype.Service;

import com.example.demo.Model.model;
import com.example.demo.Repository.repository;

@Service
public class service {
	
	@Autowired(required=true)
	repository r;
	
	public String add(model e)
	{
		r.save(e);
		return "Added";
	}
	
	
	public List<model> getDetails()
	{
		return r.findAll();
	}
	
	
	
	public model updateDetails(model newUser ,Long id) 
	{
		model up=r.findById(id).get();		
		 up.setUsername(newUser.getUsername());
		 up.setName(newUser.getName());
		 up.setEmail(newUser.getEmail());
         return r.saveAndFlush(up);
	}
	
	
	
	public void deleteDetails(Long id) {
		r.deleteById(id);
	}
	
	
	
	public model getDetail(Long id) {
		// TODO Auto-generated method stub
		return r.findById(id).get();
	}
	

}
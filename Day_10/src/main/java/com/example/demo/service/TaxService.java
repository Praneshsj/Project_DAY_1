////package com.example.service;
////
////public class TaxService {
////
////}
//package com.example.service;
//
//import java.util.List;
//
////import com.becoder.model.Product;
//
//public interface TaxService {
//
//	public  saveProduct(Product product);
//
//	public List<Product> getAllProduct();
//
//	public Product getProductById(Integer id);
//
//	public String deleteProduct(Integer id);
//
//	public Product editProduct(Product product,Integer id);
//	
//}
package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Taxentity;
import com.example.demo.repository.Taxrepo;


@Service
public class TaxService {
	
	@Autowired 
	Taxrepo r;
	public boolean addEmployee(Taxentity employee)

	{
	return r.save(employee)!=null?true:false;
	}
	public List <Taxentity> getAllEmployees()
	{
	return r.findAll();
	}
	public Taxentity getEmployeeById(int id)
	{
	return r.findById(id).get();
	}
}
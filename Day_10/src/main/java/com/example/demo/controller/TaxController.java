////package com.example.controller;
////
////public class TaxController {
////
////}
//package com.example.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//public class TaxController {
//
//	@Autowired
//	private ProductService TaxService;
//
//	@PostMapping("/saveProduct")
//	public ResponseEntity<?> saveProduct(@RequestBody Product product) {
//		return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
//	}
//
//	@GetMapping("/")
//	public ResponseEntity<?> getAllProduct() {
//		return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
//	}
//
//	@GetMapping("/{id}")
//	public ResponseEntity<?> getProductById(@PathVariable Integer id) {
//		return new ResponseEntity<>(TaxService.getProductById(id), HttpStatus.OK);
//	}
//
//	@GetMapping("/deleteProduct/{id}")
//	public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
//		return new ResponseEntity<>(productService.deleteProduct(id), HttpStatus.OK);
//	}
//
//	@PostMapping("/editProduct/{id}")
//	public ResponseEntity<?> editProduct(@RequestBody Product product, @PathVariable Integer id) {
//		return new ResponseEntity<>(TaxService.editProduct(product, id), HttpStatus.CREATED);
//	}
//
//}
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Taxentity;
import com.example.demo.service.TaxService;

@RestController
@CrossOrigin
public class TaxController {
	@Autowired
	
	TaxService s;
	
	@PostMapping("/post")
	public boolean addEmployee(@RequestBody Taxentity employee)
	{
	return s.addEmployee(employee);
	}
	@GetMapping("/get")
	public List <Taxentity> getAllEmployees()
	{
	return s.getAllEmployees();
	}
	@GetMapping("/{id}")
	public Taxentity getEmployeeById(@PathVariable int id)
	{
	return s.getEmployeeById(id);
	}

}
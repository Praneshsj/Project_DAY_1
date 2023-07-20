////package com.example.reposiitory;
////
////public class Taxrepo {
////
////}
//package com.example.repository;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.example.model;
//
//public interface Taxrepo extends JpaRepository<Product, Integer> {
//
//}
package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Taxentity;

public interface Taxrepo extends JpaRepository<Taxentity, Integer> {

}
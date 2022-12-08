package com.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.backend.entity.Product;

public interface ProductRepo extends JpaRepository<Product,Long> {
	
	@Query("select Product from Product Product where productCategory=?1")
	public List<Product> findproductbycategory(String name);
	
	
}

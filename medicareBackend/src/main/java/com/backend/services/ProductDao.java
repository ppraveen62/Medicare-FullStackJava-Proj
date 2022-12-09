package com.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.entity.Product;
import com.backend.entity.Users;
import com.backend.repo.ProductRepo;

@Service
public class ProductDao {
	
	@Autowired
	ProductRepo productrepo;

	public Product insert(Product p) {
		return productrepo.save(p);
		
	}
	
	//retrieve
	public List<Product> getproduct() {
		return productrepo.findAll();
	}
	
	

	
	public boolean delete(long id) {
		if (productrepo.findById(id).isPresent()) {
			productrepo.deleteById(id);
			return true;
		}
		return false;
	}
	
	public Product getProductById(Long id) {
		if (productrepo.findById(id).isPresent()) {
			return productrepo.findById(id).get();
		}
		return null;
	}
	
	public Product updateProduct(Product newData, Long id) {
		if (productrepo.findById(id).isPresent()) {
			Product oldData = productrepo.findById(id).get();
			oldData.setProductCategory(newData.getProductCategory());
			oldData.setProductName(newData.getProductName());
			oldData.setProductPrice(newData.getProductPrice());
			oldData.setProductCompany(newData.getProductCompany());
			oldData.setProductManfacturer(newData.getProductManfacturer());
			oldData.setProductManfacturerDescription(newData.getProductManfacturerDescription());
			oldData.setProductImageUrl(newData.getProductImageUrl());
			return productrepo.save(oldData);
		} else
			return null;
	}

	public Product update2Product(Product newData, long id) {
		if (productrepo.findById(id).isPresent()) {
			Product oldData = productrepo.findById(id).get();
			oldData.setProductAvaliabilty(newData.getProductAvaliabilty());
			return productrepo.save(oldData);
		} else
			return null;
		
	}
	


	
}

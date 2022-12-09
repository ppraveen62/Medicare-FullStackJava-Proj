package com.backend.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.entity.CartsAndOrders;
import com.backend.entity.Product;
import com.backend.repo.CartsandOrdersRepo;

@Service
public class CartsAndOrdersDao {
	
	@Autowired
	CartsandOrdersRepo cartrepo;
	
	//cart
	
	public CartsAndOrders insert(CartsAndOrders c) {
		return cartrepo.save(c);
		
	}
	
	public List<CartsAndOrders> getcart() {
		return cartrepo.findAll();
	}


	
	public boolean deleteById(long id) {
		if (cartrepo.findById(id).isPresent()) {
			cartrepo.deleteById(id);
			return true;
		}
		return false;
	}
	
	
	
	//orders

	
	public CartsAndOrders updateCartByUsername(CartsAndOrders newData, Long id) {
		if (cartrepo.findById(id).isPresent()) {
			CartsAndOrders oldData = cartrepo.findById(id).get();
			oldData.setDateofpurchase(newData.getDateofpurchase());
			oldData.setOrderno(newData.getOrderno());
			oldData.setPayment(newData.getPayment());
			oldData.setUsername(newData.getUsername());
			return cartrepo.save(oldData);
		} else
			return null;
	}
	
	public CartsAndOrders updateCartqty(CartsAndOrders newData, Long id) {
		if (cartrepo.findById(id).isPresent()) {
			CartsAndOrders oldData = cartrepo.findById(id).get();
			oldData.setQty(newData.getQty());
			oldData.setTotalprice(newData.getTotalprice());
			return cartrepo.save(oldData);
		} else
			return null;
	}
	
	
	
	
}

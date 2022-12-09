package com.backend.repo;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.backend.entity.CartsAndOrders;

public interface CartsandOrdersRepo extends JpaRepository<CartsAndOrders,Long> {
	
	
	
}

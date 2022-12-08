package com.backend.repo;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.backend.entity.CartsAndOrders;

public interface CartsandOrdersRepo extends JpaRepository<CartsAndOrders,Long> {
	
	@Query("select CartsAndOrders from CartsAndOrders CartsAndOrders where username=?1 and payment='notpaid'")
	public List<CartsAndOrders> findcartbyusername(String name);

	@Transactional
	@Modifying
	@Query("update CartsAndOrders set dateofpurchase=?1,orderno=?2,payment=?3 where username=?4 and payment='notpaid'")
	public  CartsAndOrders updatebyuser(Date date,String orderno,String payment ,String username);
	
	@Query("select CartsAndOrders from CartsAndOrders CartsAndOrders where payment='paid' and username=?1")
	public List<CartsAndOrders> findcartbypayment(String username);
	
	
}

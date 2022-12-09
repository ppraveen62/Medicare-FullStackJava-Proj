package com.backend.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.CartsAndOrders;
import com.backend.entity.Product;
import com.backend.repo.CartsandOrdersRepo;
import com.backend.services.CartsAndOrdersDao;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/cartandorder")
public class CartsAndOrdersController {
	
	@Autowired
	private CartsAndOrdersDao cdao;
	
	@PostMapping("")
	public ResponseEntity<Object> addToUserCart(@RequestBody CartsAndOrders c){
		CartsAndOrders resp=cdao.insert(c);
		if(resp!=null)
			return new ResponseEntity<>(resp,HttpStatus.CREATED);
		else
			return new ResponseEntity<>("Error while creating object",HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping("")
	public List<CartsAndOrders> getcart(){
		return cdao.getcart();	
	}
	
	
	
	@DeleteMapping("{id}")
	public ResponseEntity<Object> deleteFromCart(@PathVariable Long id){
		if(cdao.deleteById(id))
			return new ResponseEntity<>("removed from successfully",HttpStatus.OK);
		else
			return new ResponseEntity<>("not available to remove",HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Object> updateCartOrder(@RequestBody CartsAndOrders c,@PathVariable long id){
		CartsAndOrders resp=cdao.updateCartByUsername(c, id);
		if(resp!=null)
			return new ResponseEntity<>(resp,HttpStatus.OK);
		else
			return new ResponseEntity<>("Order updated",HttpStatus.NOT_FOUND);
	}
	
	
	@PutMapping("/updateqty/{id}")
	public ResponseEntity<Object> updateQtyCartOrder(@RequestBody CartsAndOrders c,@PathVariable long id){
		CartsAndOrders resp=cdao.updateCartqty(c, id);
		if(resp!=null)
			return new ResponseEntity<>(resp,HttpStatus.OK);
		else
			return new ResponseEntity<>("Order updated",HttpStatus.NOT_FOUND);
	}
	

}

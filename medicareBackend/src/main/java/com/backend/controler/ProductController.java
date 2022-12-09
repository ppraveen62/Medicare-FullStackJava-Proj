package com.backend.controler;

import java.io.IOException;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
import org.springframework.web.servlet.ModelAndView;

import com.backend.entity.Product;
import com.backend.entity.Users;
import com.backend.services.ProductDao;
import com.backend.services.UsersDao;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	@Autowired
	private ProductDao pdao;
	
	@PostMapping("")
	public ResponseEntity<Object> addproduct(@RequestBody Product p){
		Product resp=pdao.insert(p);
		if(resp!=null)
			return new ResponseEntity<>(resp,HttpStatus.CREATED);
		else
			return new ResponseEntity<>("Error while creating object",HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping("")
	public List<Product> getproduct(){
		return pdao.getproduct();	
	}
	


	@DeleteMapping("{id}")
	public ResponseEntity<Object> deleteProductById(@PathVariable Long id){
		if(pdao.delete(id))
			return new ResponseEntity<>("product Deleted successfully",HttpStatus.OK);
		else
			return new ResponseEntity<>("no product available to delete",HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Object> getById(@PathVariable Long id){
		Product resp=pdao.getProductById(id);
		if(resp!=null)
			return new ResponseEntity<>(resp,HttpStatus.OK);
		else
			return new ResponseEntity<>("no user available",HttpStatus.NOT_FOUND);
	}
	
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Object> updateProduct(@RequestBody Product p,@PathVariable long id)
	{
		Product resp=pdao.updateProduct(p, id);
		if(resp!=null)
			return new ResponseEntity<>(resp,HttpStatus.OK);
		else
			return new ResponseEntity<>("no product available to update",HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/updateAvaliabilty/{id}")
	public ResponseEntity<Object> update2Product(@RequestBody Product p,@PathVariable long id)
	{
		Product resp=pdao.update2Product(p, id);
		if(resp!=null)
			return new ResponseEntity<>(resp,HttpStatus.OK);
		else
			return new ResponseEntity<>("no product available to update",HttpStatus.NOT_FOUND);
	}
}

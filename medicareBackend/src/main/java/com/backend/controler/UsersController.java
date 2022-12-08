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


import com.backend.entity.Users;
import com.backend.services.UsersDao;




@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/user")
public class UsersController {
	
	@Autowired
	private UsersDao udao;
	@PostMapping("")
	public ResponseEntity<Object> registeruserdetails(@RequestBody Users u){
		Users resp=udao.insert(u);
	
		if(resp!=null)
			return new ResponseEntity<>(resp,HttpStatus.CREATED);
		else
			return new ResponseEntity<>("Error while creating object",HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	
	@PostMapping("/loginUser")
	public ResponseEntity<Object> loginuser(@RequestBody Users u){
		
		boolean resp=udao.loginCheck(u.getUsername(), u.getPassword());
		
		if (resp==true){
			return ResponseEntity.ok(resp);
		}
		else {
			return (ResponseEntity<Object>) ResponseEntity.internalServerError();
		}	
	}
	
	@PostMapping("/loginAdmin")
	public ResponseEntity<Object> loginadmin(@RequestBody Users u){
		
		boolean resp=udao.adminloginCheck(u.getUsername(), u.getPassword());
		
		if (resp==true){
			return ResponseEntity.ok(resp);
		}
		else {
			return (ResponseEntity<Object>) ResponseEntity.internalServerError();
		}	
	}
	
	@GetMapping("")
	public List<Users> getAll(){
		return udao.getusers();
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Object> getById(@PathVariable int id){
		Users resp=udao.getUserById(id);
		if(resp!=null)
			return new ResponseEntity<>(resp,HttpStatus.OK);
		else
			return new ResponseEntity<>("no user available",HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Object> updateUser(@RequestBody Users u,@PathVariable int id)
	{
		Users resp=udao.updateUser(u, id);
		if(resp!=null)
			return new ResponseEntity<>(resp,HttpStatus.OK);
		else
			return new ResponseEntity<>("no user available to update",HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Object> deleteUser(@PathVariable int id){
		if(udao.deleteuser(id))
			return new ResponseEntity<>("user Deleted successfully",HttpStatus.OK);
		else
			return new ResponseEntity<>("no user available to delete",HttpStatus.NOT_FOUND);
	}
	


}

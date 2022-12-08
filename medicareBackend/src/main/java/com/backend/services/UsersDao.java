package com.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.entity.Users;
import com.backend.repo.UsersRepo;


@Service
public class UsersDao {
	
	@Autowired
	UsersRepo userrepo;

	public Users insert(Users u) {
		return userrepo.save(u);
		
	}
	
	//retrieve
	public List<Users> getusers() {
		return userrepo.findusers();
	}

	
	public Users updateUser(Users newData, int id) {
		if (userrepo.findById(id).isPresent()) {
			Users oldData = userrepo.findById(id).get();
			oldData.setUsername(newData.getUsername());
			oldData.setPassword(newData.getPassword());
			oldData.setUseremail(newData.getUseremail());
			oldData.setAddress(newData.getAddress());
			oldData.setPincode(newData.getPincode());
			oldData.setName(newData.getName());
			oldData.setContactno(newData.getContactno());
			return userrepo.save(oldData);
		} else
			return null;
	}


	public boolean deleteuser(int id) {
		if (userrepo.findById(id).isPresent()) {
			userrepo.deleteById(id);
			return true;
		}
		return false;
	}


	public Users getUserById(int id) {
		if (userrepo.findById(id).isPresent()) {
			return userrepo.findById(id).get();
		}
		return null;
	}
	
	public boolean loginCheck(String username,String password) {
		if(userrepo.logincheck(username,password).getUsername()!=null) {
			return true;
		};
		return false;
		
	}

	public boolean adminloginCheck(String username,String password) {
		if(userrepo.adminlogincheck(username,password).getUsername()!=null) {
			return true;
		};
		return false;
		
	}

	
}

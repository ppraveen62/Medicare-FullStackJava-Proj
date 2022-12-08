package com.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.backend.entity.Users;

public interface UsersRepo extends JpaRepository<Users,Integer> {
	
	@Query("select Users from  Users Users where role='User'")
	public List<Users> findusers();
	
	@Query("select Users from  Users Users where username=?1 and password=?2 and role='User'")
	public Users logincheck(String username, String password);
	
	@Query("select Users from  Users Users where username=?1 and password=?2 and role='Admin'")
	public Users adminlogincheck(String username, String password);

}

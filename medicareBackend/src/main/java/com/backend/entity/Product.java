package com.backend.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product{
	
	@Id 
	private Long productId;
	private String productCategory;
	private String productName;
	private String productPrice;
	private String productCompany;
	private String productManfacturerDescription;
	private String productManfacturer;
	private Boolean productAvaliabilty;
	@Column(length =1000)
	private String productImageUrl;
		
}

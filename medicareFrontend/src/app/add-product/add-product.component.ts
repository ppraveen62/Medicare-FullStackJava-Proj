import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product=new Product();
 
  constructor(private service:ProductService,private router: Router) { }

  ngOnInit(): void {
  }

  //addproduct form

  addproductForm= new FormGroup({
    productId: new FormControl("",Validators.required),
    productCategory: new FormControl("",Validators.required),
    productName: new FormControl("",Validators.required),
    productPrice: new FormControl("",Validators.required),
    productCompany: new FormControl("",Validators.required),
    productManfacturerDescription: new FormControl("",Validators.required),
    productManfacturer: new FormControl("",Validators.required),
    productImageUrl: new FormControl("",Validators.required),
  })

  submitted:boolean=false;

  get addproductform(){
    return this.addproductForm.controls;
  }

  addProduct(){
    this.submitted=true;
    if(this.addproductForm.invalid){
      return
    }else{
      this.service.add(this.product).subscribe(data=>{
        alert("Added Sucessfully");
        this.router.navigate(["/adminHome"]);
        },
        error=>alert("Error try again")
       );}
  }

  
}

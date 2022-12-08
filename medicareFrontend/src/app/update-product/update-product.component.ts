import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {



  id:string | null | undefined;
  product:Product=new Product();
  
 
  constructor(private service:ProductService,private router: Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.id= this.activatedroute.snapshot.paramMap.get('id');
  }

  //updateproduct form

  updateproductForm= new FormGroup({
    productCategory: new FormControl("",Validators.required),
    productName: new FormControl("",Validators.required),
    productPrice: new FormControl("",Validators.required),
    productCompany: new FormControl("",Validators.required),
    productManfacturerDescription: new FormControl("",Validators.required),
    productManfacturer: new FormControl("",Validators.required),
    productImageUrl: new FormControl("",Validators.required),
  })

  submitted:boolean=false;
 
  
  get updateproductform(){
    return this.updateproductForm.controls;
  }

  updateProduct(){
    this.submitted=true;
    if(this.updateproductForm.invalid){
      return
    }else{
      this.service.update(this.product,Number(this.id)).subscribe(data=>{
        alert("Added Sucessfully");
        this.router.navigate(["/adminHome"]);
        },
        error=>alert("Error try again")
       );}
  }

}

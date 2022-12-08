import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  users!:User[];
  products!: Product[];
  searchText:any;
  menuproduct:Boolean=true;
  menuuser:Boolean=false;
 
  product:Product=new Product();
  
 
  constructor(private uservice:UserService,private service:ProductService,private router: Router,private activatedroute:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(data=>this.products=data);
    this.uservice.getAllUsers().subscribe(data=>this.users=data);
  }

  prdouctslist(){
    let id1=document.getElementById("product");
    if (id1 != null) {
      id1.style.color = 'black';
    }
    let id2=document.getElementById("user");
    if (id2 != null) {
      id2.style.color = '#007bff';
    }
    if(this.menuproduct==false){
      this.menuproduct=true;
      this.menuuser=false;
  
    }
  }

  userslist(){
    let id1=document.getElementById("product");
    if (id1 != null) {
      id1.style.color = '#007bff';
    }
    let id2=document.getElementById("user");
    if (id2 != null) {
      id2.style.color = 'black';
    }
    if(this.menuuser==false){
      this.menuuser=true;
      this.menuproduct=false;
      
    }
  }

  delete(id:Number){
    this.products=this.products.filter(p=>p.productId!==id)
    this.service.delete(id).subscribe(data=>console.log(data))
  }

  avaliabilty(id:Number){
    this.product.productAvaliabilty=false;
    this.service.avaliabilty(this.product,id).subscribe((data) =>{
      console.log(data);
      this.ngOnInit();})    
  }
  
  avaliabilty2(id:Number){
    this.product.productAvaliabilty=true;
    this.service.avaliabilty(this.product,id).subscribe((data) =>{
      console.log(data);
      this.ngOnInit();})
  }



 
 
  


}

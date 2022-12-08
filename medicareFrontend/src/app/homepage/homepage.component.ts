import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UserData } from '../user-data';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private cservice:CartService,private service:ProductService,private router: Router,private activatedroute:ActivatedRoute) { }

  userName:string=UserData.username;
  check:boolean=true;
  products!: Product[];
  cart:Cart=new Cart();


 
  ngOnInit(): void {
    this.userName=UserData.username
    if(this.userName==null){
      this.userName="guest";
      this.check=false;
    }
    this.showproduct=false;
    this.service.getAllProducts().subscribe(data=>{this.products=data });
  }

  updateName: string ="all";

  searchtext:string="";

  

  opencart(){
    if(this.check==true){
      this.router.navigate(["/cart"]);
    }
    this.showproduct=false;
  }

Update(value: string) {
  let id1=document.getElementById("all");
  if (id1 != null) {
    id1.style.color = '#0a0a23';
  }
  let id2=document.getElementById("medicine");
  if (id2 != null) {
    id2.style.color = '#0a0a23';
  }
  let id3=document.getElementById("babycare");
  if (id3 != null) {
    id3.style.color = '#0a0a23';
  }
  let id4=document.getElementById("personalcare");
  if (id4 != null) {
    id4.style.color = '#0a0a23';
  }
  let id5=document.getElementById("vitamins");
  if (id5 != null) {
    id5.style.color = '#0a0a23';
  }
  let id6=document.getElementById("health");
  if (id6 != null) {
    id6.style.color = '#0a0a23';
  }

   this.updateName = value;
   let active=document.getElementById(value)
   if (active != null) {
    active.style.color = '#5470d0'; 
  }
   this.showproduct=false;
  
  }


  productid!:number;
  showproduct:boolean=false;

  updateid(id:number){
    this.productid=id;
    this.showproduct=true;

  }

  changeshowproduct(){
    this.showproduct=false
  }

  addtocart(username:string,productid:number,productcategory:string,productname:string,productprice:number,productimageurl:string) {
    if(username!="guest"){
      this.cart.username=username;
      this.cart.productid=productid;
      this.cart.productcategory=productcategory;
      this.cart.productname=productname;
      this.cart.productprice=productprice;
      this.cart.productimageurl=productimageurl;
      this.cart.qty=1;
      this.cart.totalprice=(Number)(productprice*1);

      this.cservice.add(this.cart).subscribe(data=>{
        alert("Added Sucessfully");
        console.log(this.cart)
        },
        error=>alert("Error try again")
       );}
       else{
        alert("Please login to Continue");
        this.router.navigate([""])
      }
    }
    


}
  
  
  

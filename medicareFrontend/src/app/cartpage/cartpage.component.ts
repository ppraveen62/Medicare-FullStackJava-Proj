

import { Component, Input, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import { UserData } from '../user-data';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {

  cart:Cart=new Cart();
  carts!:Cart[];  


  userName:string=UserData.username;
  check:boolean=true;
  

  
 
  ngOnInit(): void {
    
    this.cservice.getcart().subscribe(data=>{this.carts=data;this.calculate();});
    this.userName=UserData.username
    if(this.userName==null){
      this.userName="guest";
      this.check=false;
    }
   
  }
 

  constructor(private cservice:CartService,private router: Router,private activatedroute:ActivatedRoute) { }

  totalmrp!:string;
  discount!:string;
  totalamt!:string;

  totalmrp1!:number;
 

  calculate(){
    UserData.totalamt=0;
    this.totalmrp1=0;
    for(let i=0; i<(this.carts.length);i++){
      if(this.carts[i].username==this.userName && this.carts[i].payment=='notpaid'){
        this.totalmrp1+=Number(this.carts[i].totalprice);
     
      } 
    }
    this.totalmrp=(this.totalmrp1).toFixed(2)

    this.discount=(this.totalmrp1*15/100).toFixed(2);
    this.totalamt=(this.totalmrp1).toFixed(2)

    UserData.totalamt=this.totalmrp1;

  }

  remove(id:number){
    this.carts=this.carts.filter(c=>c.cartid!==id)
    this.cservice.delete(id).subscribe(data=>{})
  }


  qty!:number;
  totalPrice!:number
  

 changeqty(e:any,id:number){
    this.cart.qty=e.target.value;

    for(let i=0; i<(this.carts.length);i++){
      if(this.carts[i].cartid==id){
        let x=Number(this.carts[i].productprice)
        let y=Number(this.cart.qty)
        this.totalPrice=(x*y)
      } 
    }
    this.cart.totalprice=this.totalPrice
    
    this.cservice.updateqty(id,this.cart).subscribe(data=>{this.ngOnInit()});
    
 }


}

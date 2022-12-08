import { UserData } from './../user-data';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {

  constructor(private cservice:CartService,private router: Router,private activatedroute:ActivatedRoute) { }

  cart:Cart=new Cart();
  carts!:Cart[];  
  userName:string=UserData.username;
  totalamt:string=UserData.totalamt.toFixed(2);
  ordernum!:number; 

  ngOnInit(): void {
    UserData.orderno= Math.floor(Math.random() * 100000)+1;
    this.ordernum=UserData.orderno; 
    this.cservice.getcart().subscribe(data=>{this.carts=data;});

  }

  pay(){
    if (this.userName!='guest'){
      for(let i=0; i<(this.carts.length);i++){
        if(this.carts[i].username==this.userName && this.carts[i].payment=="notpaid"){
          let date: Date = new Date();
          this.cart.dateofpurchase=String(date);
          this.cart.username=this.userName;
          this.cart.orderno= String(this.ordernum);
          this.cart.payment="paid";
  
          this.cservice.update(this.carts[i].cartid,this.cart).subscribe(data=>{});
        } 
      }
    
    }
    
    
  }
}

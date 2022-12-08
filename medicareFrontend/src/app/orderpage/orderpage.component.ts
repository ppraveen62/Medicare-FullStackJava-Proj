import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  cart:Cart=new Cart();
  carts!:Cart[];

  constructor(private cservice:CartService,private router: Router,private activatedroute:ActivatedRoute) { }

  userName:string=UserData.username;
  check:boolean=true;


  
  
 
  ngOnInit(): void {

    this.cservice.getcart().subscribe(data=>{this.carts=data;});
    this.userName=UserData.username
    if(this.userName==null){
      this.userName="guest";
      this.check=false;
      
    }
  }
  opencart(){
    if(this.check==true){
      this.router.navigate(["/cart"]);
    }
  }
}

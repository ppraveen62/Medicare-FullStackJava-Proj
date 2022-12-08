
import { ProductService } from './../product.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { Router,ActivatedRoute } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { UserData } from '../user-data';
@Component({
  selector: 'app-medicine-product',
  templateUrl: './medicine-product.component.html',
  styleUrls: ['./medicine-product.component.css']
})
export class MedicineProductComponent implements OnInit {

  userName:string=UserData.username;
 
  products!: Product[];
  product:Product=new Product();
  cart:Cart=new Cart();

  @Input() search!: string;
  showdata: boolean=false;
  

 

  constructor(private cservice:CartService,private service:ProductService,private router: Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userName=UserData.username
    this.showdata=false;
    if(this.userName==null){
      this.userName="guest"
    }
    this.service.getAllProducts().subscribe(data=>{this.products=data });

  }

  sortlh(){
    this.products=this.products.sort((low:any, high:any) => low.productPrice - high.productPrice);
  }
  sorthl(){
    this.products=this.products.sort((low:any, high:any) => high.productPrice - low.productPrice);
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
    
  
    @Output() updateid:EventEmitter<any>=new EventEmitter();

    show(pid:number){
      this.updateid.emit(pid);
    }
}

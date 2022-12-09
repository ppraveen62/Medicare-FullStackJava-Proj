import { Cart } from './cart';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl:string= "http://localhost:8088/api/cartandorder";

  constructor(private HttpClient:HttpClient) { }

  add(cart:Cart){
    return this.HttpClient.post(this.baseUrl,cart)
  }

  getcart():Observable<Cart[]>{
    return this.HttpClient.get<Cart[]>(this.baseUrl);
  }

  delete(id:Number){
    return this.HttpClient.delete(this.baseUrl+"/"+id);
  }

  update(id:number,cart:Cart){
    return this.HttpClient.put(this.baseUrl+"/update/"+id,cart);
  }
  updateqty(id:number,cart:Cart){
    return this.HttpClient.put(this.baseUrl+"/updateqty/"+id,cart);
  }


}

import { Observable } from 'rxjs';
import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl:string= "http://localhost:8088/api/product";

  constructor(private HttpClient:HttpClient) { }

  add(product:Product){
    return this.HttpClient.post(this.baseUrl,product)
  }
  update(product:Product,id:number){
    return this.HttpClient.put(this.baseUrl+"/update/"+id,product)
  }

  getAllProducts():Observable<Product[]>{
    return this.HttpClient.get<Product[]>(this.baseUrl);
  }

  getProductbyCategory(catg:String):Observable<Product[]>{
    return this.HttpClient.get<Product[]>(this.baseUrl+"/category/"+catg);
  }

  searchProductbyId(id:Number):Observable<Product[]>{
    return this.HttpClient.get<Product[]>(this.baseUrl+"/"+id);
  }


  delete(id:Number){
    return this.HttpClient.delete(this.baseUrl+"/"+id);
  }

  avaliabilty(product:Product,id:Number){
    return this.HttpClient.put(this.baseUrl+"/updateAvaliabilty/"+id,product);
  }
}

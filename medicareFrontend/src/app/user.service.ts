import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private baseUrl:string= "http://localhost:8088/api/user";


  constructor(private HttpClient:HttpClient) { }

  registerUser(user:User){
    return this.HttpClient.post(this.baseUrl,user)
  }

  loginUser(user:User):Observable<object>{
    return this.HttpClient.post(this.baseUrl+"/loginUser",user)
  }

  loginAdmin(user:User):Observable<object>{
    return this.HttpClient.post(this.baseUrl+"/loginAdmin",user)
  }

  getAllUsers():Observable<User[]>{
    return this.HttpClient.get<User[]>(this.baseUrl);
  }

  update(user:User,id:number){
    return this.HttpClient.put(this.baseUrl+"/update/"+id,user)
  }

}

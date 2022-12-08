import { HomepageComponent } from './../homepage/homepage.component';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../user-data';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User=new User();


  constructor(private service:UserService,private router: Router) { }

  
 
  
  ngOnInit(): void {
   
  }

  //loginform

  loginForm= new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required),
  })
  submitted:boolean=false;

  get loginform(){
    return this.loginForm.controls;
  }
 
  login() {
    this.submitted=true;
    if(this.loginForm.invalid){
      return
    }else{
      this.service.loginUser(this.user).subscribe(data=>{
        this.router.navigate(["/userHome"]); UserData.username=this.user.username},
        error=>alert("Entered password or username is wrong")
       );}
      
    }
}

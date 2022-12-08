import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

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
      this.service.loginAdmin(this.user).subscribe(data=>{
        this.router.navigate(["/adminHome"]);},
        error=>alert("Entered password or username is wrong")
       );}
      
    }
}


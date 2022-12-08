
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  
  
  user:User=new User();
  constructor(private service:UserService,private router: Router) { }

  ngOnInit(): void {
  }


  //registerform

  registerForm= new FormGroup({
    name: new FormControl("",Validators.required),
    useremail: new FormControl("",Validators.required),
    contactno: new FormControl("",Validators.required),
    address: new FormControl("",Validators.required),
    pincode: new FormControl("",Validators.required),
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })
  submitted:boolean=false;

  get registerform(){
    return this.registerForm.controls;
  }
 
  register() {
    this.submitted=true;
    if(this.registerForm.invalid){
      return
    }else{
      this.service.registerUser(this.user).subscribe(data=>{
      alert("registered sucessfully");
      this.router.navigate([""]);},
      error=>alert("please enter correct details")
     );}
    }

  


}


import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
  id:string | null | undefined;

  constructor(private service:UserService,private router: Router,private activatedroute:ActivatedRoute) { }

  user:User=new User();
  ngOnInit(): void {
    this.id= this.activatedroute.snapshot.paramMap.get('id');
  }

  userupdateForm= new FormGroup({
    name: new FormControl("",Validators.required),
    useremail: new FormControl("",Validators.required),
    contactno: new FormControl("",Validators.required),
    address: new FormControl("",Validators.required),
    pincode: new FormControl("",Validators.required),
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })
  submitted:boolean=false;

  get userupdateform(){
    return this.userupdateForm.controls;
  }
 
  update() {
    this.submitted=true;
    if(this.userupdateForm.invalid){
      return
    }else{
      this.service.update(this.user,Number(this.id)).subscribe(data=>{
      alert("updated sucessfully");
      this.router.navigate([""]);},
      error=>alert("please enter correct details")
     );}
    }

}

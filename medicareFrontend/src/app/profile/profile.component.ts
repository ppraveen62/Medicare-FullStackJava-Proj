
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users!:User[];
  userName:String=UserData.username;
  check: boolean=true;

  constructor(private uservice:UserService,private router: Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.uservice.getAllUsers().subscribe(data=>{this.users=data});

    this.userName=UserData.username
    if(this.userName==null){
      this.userName="guest";
      this.check=false;
    }
    
  }

}

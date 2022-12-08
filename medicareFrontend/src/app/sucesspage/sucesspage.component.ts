import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';

@Component({
  selector: 'app-sucesspage',
  templateUrl: './sucesspage.component.html',
  styleUrls: ['./sucesspage.component.css']
})
export class SucesspageComponent implements OnInit {

  constructor() { }

  orderno:number=UserData.orderno;
  ngOnInit(): void {
  }

}

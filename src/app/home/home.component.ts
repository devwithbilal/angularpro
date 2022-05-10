import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  

})
export class HomeComponent  {

  birthday = new Date(1996, 3, 4);
  
  constructor() { }

  ngOnInit(): void {
  }

}

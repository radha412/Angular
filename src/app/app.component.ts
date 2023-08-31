import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/Users';
import { Product } from './interfaces/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
      throw new Error("Method not implemented");
      
  }
 
}

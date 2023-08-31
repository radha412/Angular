import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Users';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 user : User = {name :"", password:""}
  constructor(private userService : DataService) { }

  ngOnInit(): void {

     this.user   =this.userService.getData()
  

  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Users';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user : User = { name : "", password:""}
  constructor(private loginService : DataService) { }

  ngOnInit(): void {
  }
  userLogin(){
    console.log(this.user)
    this.loginService.setData(this.user)
  }

}

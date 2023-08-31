import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { User } from 'src/app/interfaces/Users';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


  title = 'Wallet App!';
  title1 = "this is pipe1";
  today = Date.now();
  person = {name:"Tanya", age:55}
  country =["US","EUS","UK"];
  url : string = "https://angular.io/guide/"
  imgSrc = "../assets/image1.jpeg"
  msg : string = "Hello this is to alert you!!!"
  public greet() : void {
    console.log("greeting inside the functionxs")
    alert(this.msg)
  }
  name : string = ""

  userLogin : User = {
    name : "",
    password : ""
  }

  isLoggedIn: boolean = false;
  submitLogin(){
    console.log(this.userLogin)
    this.isLoggedIn = true;
  }


 
  policy = ["policy1", "policy2", "policy3", "policy4"]
  selectedPolicy: string = ""
 
  products : Product[] = [];

  
ngOnInit(): void {
    this.products.push(new Product(1, "mob1", 2000, "this is mob1"))
    this.products.push(new Product(4, "mob2", 4000, "this is mob2"))
    this.products.push(new Product(3, "mob3", 5000, "this is mob3"))
    this.products.push(new Product(2, "mob4", 7000, "this is mob4"))
    this.products.push(new Product(5, "mob4", 7000, "this is mob4"))
    this.products.push(new Product(8, "mob4", 19000, "this is mob4"))
    this.products.push(new Product(6, "mob4", 8300, "this is mob4"))
    this.products.push(new Product(12, "mob4",5670, "this is mob4"))
  
  }


minP : number= 0;
maxP : number= 0;

nameString : string = "";

columnName = ""
changeSortBy(columnName : string){
  this.columnName = columnName
  console.log(columnName)
}




}

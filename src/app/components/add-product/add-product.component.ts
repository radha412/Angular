import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from '../../services/product.service';
import { BackendProductService } from 'src/app/services/backend-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product=new Product(0," ",0," ");
  message : string = "";
  errorMessage :string = "";
  // constructor(private productService : ProductService) { }
  constructor(private backendProductService : BackendProductService) { }

  addProduct(){
    this.backendProductService.postProduct(this.product)
    .subscribe({
      next : (data)=>{
        console.log(data)
        this.message = "Product added successfully"
        this.errorMessage = ""
      },
      error : (err)=>{
        console.log(err)
      this.errorMessage = "Failed to add the product"
      this.message = ""
      }
    })
    this.product = new Product(0," ",0," ");
  }

  ngOnInit(): void {
  }

}

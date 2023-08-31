import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { BackendProductService } from 'src/app/services/backend-product.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-all-product',
  templateUrl: './display-all-product.component.html',
  styleUrls: ['./display-all-product.component.css']
})
export class DisplayAllProductComponent implements OnInit {

  products:Product[] = [];
  updatedProduct : Product = new Product(0,"",0,"")
  isUpdate : Boolean =  false;
  // constructor(private productService:ProductService) { }
  constructor(private backendProductService:BackendProductService) { }
  

  ngOnInit(): void {
    this.loadAllProductsToComponent();
    
  }

  loadAllProductsToComponent(){
    this.backendProductService.getAllProducts().subscribe(
      {
          next: (data)=>{
          this.products = data
        },
          error : (err)=>{
          console.log(err)
        },
        complete: ()=>{
          console.log("loadeed the data")
        }
      }
    );

  }

  deleteProductById(deleteId :number) {
  //  this.products =  this.productService.deleteProductById(deleteId)
  if(confirm("Do you want to delete the product")){
    this.backendProductService.deleteProductByid(deleteId)
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.loadAllProductsToComponent();
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  }

  updateProduct(updateProduct : Product){
    this.isUpdate = true;
    // this.updatedProduct = updateProduct;
    // this.backendProductService.updateProduct(updateProduct)
    // .subscribe(
    //   {
    //     next:(data)=>{
    //       console.log(data)
    //       this.loadAllProductsToComponent();
    //     },
    //     error(err) {
    //         console.log(err);
    //     },
    //   }
    // )

  }

  updateProductSubmit(){
    console.log(this.updatedProduct)
    // this.products = this.productService.updateProduct(this.updatedProduct)
    // this.isUpdate= false
    // this.backendProductService.updateProduct(updateProduct)
    // .subscribe(
    //   {
    //     next:(data)=>{
    //       console.log(data)
    //       this.loadAllProductsToComponent();
    //     },
    //     error(err) {
    //         console.log(err);
    //     },
    //   }
    // )
  }

}

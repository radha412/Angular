import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
  constructor() { 
    this.products.push(new Product(1,"Product1", 1000, "this is product 1"))
    this.products.push(new Product(2,"Product2", 2000, "this is product 2"))
    this.products.push(new Product(3,"Product3", 3000, "this is product 3"))
  }

  addProduct(newProduct: Product):number{

    console.log("inide the Product Service")
    console.log(newProduct)
    return this.products.push(newProduct);
  }

  getAllProducts():Product[]{
    return this.products;
  }

  deleteProductById(deleteId:number) : Product[]{
    console.log(deleteId , "delete product id")
    this.products = this.products.filter(p=>!(p.id == deleteId))
    return this.products
  }
  

  updateProduct(updateProduct : Product) : Product[]{
    this.products = this.products.filter(p=> !(p.id == updateProduct.id))
    this.products.push(updateProduct)
    return this.products
  }

  
}

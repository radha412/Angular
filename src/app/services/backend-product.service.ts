import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendProductService {

  constructor(private httpClient : HttpClient) { }
  
    postProduct(newProduct : Product) : Observable<any> {
      return this.httpClient.post("http://localhost:8080/product", newProduct )
    }

    getAllProducts() : Observable<any> {
      return this.httpClient.get("http://localhost:8080/allProducts", { responseType:"json"} )
    }

    deleteProductByid(deleteId:number) : Observable<any>{
      return this.httpClient.delete("http://localhost:8080/product/"+deleteId)
    }

    updateProduct(product : Product): Observable<any>{
      return this.httpClient.put("http://localhost:8080/product/",product)
    }

  }


import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/Product';

@Pipe({
  name: 'priceBetween'
})
export class PriceBetweenPipe implements PipeTransform {

  transform(products: Product[], priceMin : number, priceMax : number): Product[] {
    if(products.length == 0){
      return products
    }
    return products.filter((p)=>
    {
      if(p != undefined){

        if(priceMax == undefined){
          return (p.price > priceMin)
        }
        else{
          return (p.price>= priceMin) && (p.price<=priceMax)
        }  

      }
      return true;
    });
   

  }

}

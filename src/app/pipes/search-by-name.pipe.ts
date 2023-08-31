import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/Product';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(products: Product[], value : string ): Product[] {
    if(products.length == 0){
      return products
    }
    return products.filter((p)=>{
      if(p != undefined){
        return (p.name.includes(value)) 
      }
      return true;
    })
  }

}

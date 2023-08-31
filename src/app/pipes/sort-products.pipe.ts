import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/Product';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(products: Product[], columnName: String = "id"): Product[] {

    return products.sort((p1,p2)=>{

      switch(columnName){
        case ("id"):
          return( p1.id - p2.id)
          break;
        case("name"):
        return p1.name.localeCompare(p2.name)
        break;
        case("price"):
        return p1.price - p2.price
        break;
      }

      
      return 0;
    });
  }

}

export class Product{
    id : number;
    name : string;
    price : number;
    description : string;

    constructor(id:number,name:string, price:number,description
        :string){
            this.id = id;
            this.name = name;
            this.price = price;
            this.description = description;
        }
}


// {
//     "id": 20,
//     "name": "prod1",
//     "price": 34,
//     "description": "this is description",
//     "manufacturingDate": "2023-08-13",
//     "expiryDate": "2023-08-28",
//     "quantity": 2
//   }

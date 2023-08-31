import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data : any = {name:"", password :""}
  constructor() { }

   getData():any{
    return this.data;
  }

  setData(data:any): void{
    this.data = data;
  }
}

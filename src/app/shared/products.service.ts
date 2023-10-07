import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PRODUCT_API} from "./constants/api-end-point";
import {IProduct} from "./product.model";



@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(private _http:HttpClient) { }

  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(PRODUCT_API);
  }

  getTodos(id:number) {
    return this._http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

}

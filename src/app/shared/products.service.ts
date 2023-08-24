import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PRODUCT_API} from "./constants/api-end-point";
import {IProduct} from "./product.model";



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private LOC_JSON_FILE = "../../assets/products.json"

  constructor(private _http:HttpClient) { }

  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(PRODUCT_API);
  }

  getProductsFromLoc():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.LOC_JSON_FILE);
  }

}

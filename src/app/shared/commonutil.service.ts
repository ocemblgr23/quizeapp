import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PRODUCT_API} from "./constants/api-end-point";
import {IProduct} from "./product.model";

// https://transform.tools/json-to-typescript
export interface IStateList {
  state?: string;
  districts?: string[];
}


@Injectable({
  providedIn: 'root'
})
export class CommonutilService {

  private LOC_JSON_FILE = "../../assets/products.json"
  private LOC_STATES="../../assets/indiastatelist.json"
  constructor(private _http:HttpClient) { }

  getProductsFromLoc():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.LOC_JSON_FILE);
  }

  getIndiaStates():Observable<IStateList[]> {
    return this._http.get<IStateList[]>(this.LOC_STATES);
  }

}

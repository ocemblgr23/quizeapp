import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {IProduct} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private sharedDataSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Share Message')
  cartItems:IProduct[]=[];
  constructor() { }

  setSharedData(data:string) {
    this.sharedDataSubject.next(data)
  }

  getSharedData(): Observable<string>{
    return this.sharedDataSubject.asObservable();
  }

  cartItemsList(p:IProduct) {
    this.cartItems.push(p)
  }

  getCartItems():Observable<IProduct[]>{
    return  of(this.cartItems);
  }

}

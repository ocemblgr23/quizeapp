import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private sharedDataSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Share Message')

  constructor() { }

  setSharedData(data:string) {
    this.sharedDataSubject.next(data)
  }

  getSharedData(): Observable<string>{
    return this.sharedDataSubject.asObservable();
  }
}

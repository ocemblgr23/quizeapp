import {AfterViewChecked, Component, OnChanges, OnInit} from '@angular/core';
import {CartService} from "./shared/cart.service";
import {interval, Observable} from "rxjs";
import {IProduct} from "./shared/product.model";
import * as products from "../assets/products.json";
import {ProductsService} from "./shared/products.service";
import {CommonutilService} from "./shared/commonutil.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked,OnChanges{
  title = 'quizeapp';
  $sharedMessage: Observable<string>;
  cartItems:IProduct[]=[];
  counter = interval(2000)
  constructor(private cartService:CartService,private products:ProductsService,private commonUtil:CommonutilService){
  this.$sharedMessage = this.cartService.getSharedData();
}
  ngOnInit() {
    this.cartService.getCartItems().subscribe(p=>{
     this.cartItems = p;
    })
    this.commonUtil.getProductsFromLoc().subscribe(p=>{
      // console.log(p)
    })
  //   subscribe the interval
    this.counter.subscribe(c=>{
     this.products.getTodos(c).subscribe(resp=>{
       // log every 1 sec
       console.log(resp)
     })
    })
  }
  ngAfterViewChecked() {
    // console.log('method called')
    this.$sharedMessage = this.cartService.getSharedData();
  }

  ngOnChanges(){
    console.log("Hi")
  }



}

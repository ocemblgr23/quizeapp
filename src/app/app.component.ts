import {AfterViewChecked, Component, OnChanges, OnInit} from '@angular/core';
import {CartService} from "./shared/cart.service";
import {Observable} from "rxjs";
import {IProduct} from "./shared/product.model";
import * as products from "../assets/products.json";
import {ProductsService} from "./shared/products.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked,OnChanges{
  title = 'quizeapp';
  $sharedMessage: Observable<string>;
  cartItems:IProduct[]=[];
  constructor(private cartService:CartService,private products:ProductsService){
  this.$sharedMessage = this.cartService.getSharedData();
}
  ngOnInit() {
    console.log('called')
    this.cartService.getCartItems().subscribe(p=>{
     this.cartItems = p;
    })
    this.products.getProductsFromLoc().subscribe(p=>{
      console.log(p)
    })
  }
  ngAfterViewChecked() {
    console.log('method called')
    this.$sharedMessage = this.cartService.getSharedData();
  }

  ngOnChanges(){
    console.log("Hi")
  }

}

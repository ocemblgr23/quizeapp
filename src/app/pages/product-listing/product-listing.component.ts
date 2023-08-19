import {Component, OnInit} from '@angular/core';
import { ProductsService} from "../../shared/products.service";
import { Observable} from "rxjs";
import {IProduct} from "../../shared/product.model";
import {CartService} from "../../shared/cart.service";

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit{

  $products:Observable<IProduct[]> = this._product.getProducts();
  cartItems:IProduct[]=[];
  simpleTest: string=""

  constructor(private _product:ProductsService,public cartService:CartService) {
  }
  ngOnInit() {
    // this._product.getProducts().subscribe((p:IProduct[])=>{
    //   console.log(p)
    // })
  }
  addToCart(product:IProduct) {
    this.cartItems.push(product)
  }
  shareData() {
    this.cartService.setSharedData(this.simpleTest);
  }
}

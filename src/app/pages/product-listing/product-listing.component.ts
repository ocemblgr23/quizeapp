import {Component, OnInit} from '@angular/core';
import {IProduct, ProductsService} from "../../shared/products.service";
import {debounceTime, Observable} from "rxjs";

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit{

  $products:Observable<IProduct[]> = this._product.getProducts();

  constructor(private _product:ProductsService) {
  }
  ngOnInit() {
    // this._product.getProducts().subscribe((p:IProduct[])=>{
    //   console.log(p)
    // })
  }
}

import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../shared/product.model";
import {CartService} from "../../shared/cart.service";


interface ICartItem {
  id:number;
  title:string;
  category:string;
  unit?:number;
  price:number;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems:IProduct[]=[]
  constructor(private cartService:CartService) {
  }

  ngOnInit() {
    console.log('called')
    this.cartService.getCartItems().subscribe(p=>{
      this.cartItems = p;
    })
  }


  testFilterCart(): IProduct[] {
    const uniCart:IProduct[] = [];
    this.cartItems.map((cartP)=>{
      const existItem = uniCart.find((updateItem)=>updateItem.id === cartP.id);
      if(existItem) {
        existItem.unit = (existItem.unit || 1) +1;
        existItem.price = existItem.price * existItem.unit;
      } else {
        uniCart.push({...cartP,unit:1})
      }
    })
    return uniCart;
  }


  filterCartItems(){
    // @ts-ignore
    const uniq = this.cartItems.filter((p,index)=>{
        if(this.cartItems.findIndex((prod:IProduct)=>prod.id === p.id)===index) {
          console.log('count')
            p.unit = p.unit ? p.unit +1  : 1;
            p.price = p.price * p.unit
          return p;
        }

      })
      // if(!isDuplicate){
      //   p.unit = p.unit ? p.unit +1  : 1;
      //   p.price = p.price * p.unit
      // }
      // console.log(isDuplicate)
    console.log(uniq)
  }

  totalPrice(carts:IProduct[]): number {
    const total = carts.reduce((acc,currentValue)=>{
      return acc+currentValue.price;
    },0)
    return  total;
  }
}

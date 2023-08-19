import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {CartService} from "./shared/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked{
  title = 'quizeapp';
  $sharedMessage: Observable<string>;

  constructor(private cartService:CartService){
  this.$sharedMessage = this.cartService.getSharedData();
}
  ngOnInit() {

  }
  ngAfterViewChecked() {
    console.log('method called')
    this.$sharedMessage = this.cartService.getSharedData();

  }

}

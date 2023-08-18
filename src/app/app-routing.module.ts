import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AboutComponent} from "./pages/about/about.component";
import {ProductListingComponent} from "./pages/product-listing/product-listing.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductListingComponent },
  { path: '', redirectTo:'home', pathMatch:"full" },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

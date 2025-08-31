import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from "src/app/app-routing.module";
import { ShopRoutingModule } from './shop-routing.module';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemsComponent,
    ProductDetailsComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ShopRoutingModule
],
  exports:[ShopComponent]
})
export class ShopModule { }

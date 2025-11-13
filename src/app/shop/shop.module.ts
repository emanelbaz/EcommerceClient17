import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopRoutingModule } from './shop-routing.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemsComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
  
],
  exports:[ShopComponent]
})
export class ShopModule { }

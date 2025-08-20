import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemsComponent } from './product-items/product-items.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ShopComponent]
})
export class ShopModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemsComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ],
  exports:[ShopComponent]
})
export class ShopModule { }

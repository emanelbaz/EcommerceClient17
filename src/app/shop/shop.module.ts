import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { SharedModule } from '../shared/shared.module';
//  import { ProductDetailsComponent } from './product-details/product-details.component';
//  import { ShopRoutingModule } from './shop-routing.module';
//  import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropdownModule } from 'primeng/dropdown';
import { AccountRoutingModule } from 'src/app/account/account/account-routing.module';

@NgModule({
  declarations: [
    ShopComponent,
    ProductItemsComponent,
    ProductDetailsComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
    MatSidenavModule,
    DropdownModule,
    AccountRoutingModule,
  ],
  exports: [ShopComponent, SidebarComponent],
})
export class ShopModule {}

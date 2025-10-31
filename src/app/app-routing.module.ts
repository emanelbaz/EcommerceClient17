import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
{path:'',component:HomeComponent},
{path:'shop',component:ShopComponent},
{path:'shop/:id',component:ProductDetailsComponent},
{path:'**',redirectTo:'',pathMatch:'full'},
{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

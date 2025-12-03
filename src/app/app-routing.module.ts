import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { LoginComponent } from './account/login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './account/register/register.component';

const routes: Routes = [
  
{ path: 'login', component: LoginComponent },
{path:'register', component:RegisterComponent},
//  {path:'',component:AppComponent,children:[
//   {path: 'home', loadChildren: () =>import('./home/home.module').then((m) => m.HomeModule)},
//   {path: 'shop', loadChildren: () =>import('./shop/shop.module').then((m) => m.ShopModule)},
//   { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: '**', redirectTo: '/home', pathMatch: 'full' },

//  ]},
{path:'shop',component:ShopComponent},
{path:'shop/:id',component:ProductDetailsComponent},
{path:'home',component:HomeComponent},

{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
{path:'**',redirectTo:'/home',pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

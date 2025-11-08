import { Routes } from '@angular/router';
import { UserComponent } from './layouts/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './layouts/auth/auth.component';

export const routes: Routes = [


  // layouts Auth
  {path:"" , component:AuthComponent , children:[
  {path:"" , redirectTo:"login" , pathMatch:"full" , title:"login" } ,
  {path:"login" , component : LoginComponent , title:"login"} ,
  {path:"register" , component: RegisterComponent , title:"regsiter" } ,
  ]}


];

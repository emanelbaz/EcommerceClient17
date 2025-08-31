import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from "src/app/app-routing.module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
],
  exports:[NavBarComponent]
})
export class CoreModule { }

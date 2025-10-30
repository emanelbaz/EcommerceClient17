import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from "src/app/app-routing.module";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
     HttpClientModule,
    FormsModule,
    ReactiveFormsModule
],
  exports:[NavBarComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }

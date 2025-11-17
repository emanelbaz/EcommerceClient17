import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingHeaderComponent } from './Components/paging-header/paging-header.component';
import { PagerComponent } from './Components/pager/pager.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';




@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    SpinnerComponent,
    
  ],
  imports: [
    CommonModule,
    
   
  ],
  exports :[
    PagerComponent,
    PagingHeaderComponent,
    SpinnerComponent, 
 
  ]
})
export class SharedModule { }

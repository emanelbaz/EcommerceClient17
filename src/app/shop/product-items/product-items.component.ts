import { Component, input, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../../shared/models/products';
import { CartService } from '../../core/services/cart.service';
import { Router } from '@angular/router';
import { ProductsService } from '../products-service.service';



@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemsComponent implements OnInit {
selected= false
  
product = input.required<IProduct> ()

constructor(private productService: ProductsService,private router:Router){}

  ngOnInit(): void {
   
    
  }
  toggleSelection(){
    this.selected= true
  
  }
  addToCart(){
    this.selected = false
    
  }
  goToProductDetails(id:string){
      this.router.navigate(['shop',id])
    

  }

}

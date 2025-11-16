import { Component, Input, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../../shared/models/products';
import { CartService } from '../../core/services/cart.service';
import { Router } from '@angular/router';
import { ProductsService } from '../products-service.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemsComponent implements OnInit {
selected= false
  
@Input() product!:IProduct;

constructor(private productService: ProductsService,private router:Router){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response:Product[])=>{
      console.log(response);
      

    })
    
  }
  addToCart(){
    this.selected= true
  }
  addItem(){
    this.selected = false
  }
  goToProductDetails(event:any){
    // const id = event.target.id
    // this.router.navigate([`/shop/${id}`])

  }
// addToCart(product: IProduct): void {
//     this.cartService.addItemToCart(product);
//   }
}

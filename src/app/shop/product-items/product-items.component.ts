import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/products';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
@Input() product!:IProduct;

constructor(private cartService: CartService){}

  ngOnInit(): void {
    
  }
addToCart(product: IProduct): void {
    this.cartService.addItemToCart(product);
  }
}

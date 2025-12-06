import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Cart } from '../../shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartItem';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit {
  cart: Cart | null = null;
  CartItems: any = [];
  subTotal: number = 0;

  constructor(
    private cartService: CartService,
    private toaster: ToastrService
  ) {}

  ngOnInit() {
    this.getCartItems();
  }
  getCartItems() {
    if ('cart' in localStorage) {
      // this.cartService.getItemFromLocalStorage('cart');
      this.CartItems = JSON.parse(localStorage.getItem('cart')!);
    }

    this.getSubToalPrice();
  }
  getSubToalPrice() {
    this.subTotal = 0;
    for (let x in this.CartItems)
      this.subTotal +=
        this.CartItems[x].product.price * this.CartItems[x].quantity!;
  }

  decreaseQty(index: number) {
    if (this.CartItems[index].quantity > 1) {
      this.CartItems[index].quantity--;
      localStorage.setItem('cart', JSON.stringify(this.CartItems));
      this.getSubToalPrice();
    }
  }
  increaseQty(index: number) {
    this.CartItems[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.CartItems));
    this.getSubToalPrice();
  }

  removeItem(index: number) {
    this.CartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.CartItems));
    this.getSubToalPrice();
    this.toaster.info(
      `${this.CartItems[index].product.name} Removed From Cart`,
      'Item Removed'
    );
  }
}

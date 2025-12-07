import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../../shared/models/cart';
import { CartItem } from '../../shared/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // private cartSource = new BehaviorSubject<Cart | null>(
  //   this.getCartFromLocalStorage()
  // );
  // cart$ = this.cartSource.asObservable();

  constructor() {}
  setItemToLocalstorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItemFromLocalStorage(key: string): CartItem[] | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as CartItem[]) : null;
  }

  //   private getCartFromLocalStorage(): Cart | null {
  //     const cart = localStorage.getItem('cart');
  //     return cart ? JSON.parse(cart) : { id: this.generateId(), items: [] };
  //   }

  //   private saveCartToLocalStorage(cart: Cart) {
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //   }

  //   private generateId(): string {
  //     return Math.random().toString(36).substring(2);
  //   }

  //   addItemToCart(product: any, quantity = 1) {
  //     const cart = this.getCartFromLocalStorage();
  //     if (!cart) return;

  //     const itemIndex = cart.items.findIndex((i) => i.id === product.id);
  //     if (itemIndex === -1) {
  //       const newItem: CartItem = {
  //         id: product.id,
  //         productName: product.name,
  //         price: product.price,
  //         pictureUrl: product.pictureUrl,
  //         quantity,
  //         brand: product.productBrand,
  //         type: product.productType,
  //       };
  //       cart.items.push(newItem);
  //     } else {
  //       cart.items[itemIndex].quantity += quantity;
  //     }

  //     this.saveCartToLocalStorage(cart);
  //     this.cartSource.next(cart);
  //   }

  //   removeItemFromCart(id: number) {
  //     const cart = this.getCartFromLocalStorage();
  //     if (!cart) return;

  //     cart.items = cart.items.filter((item) => item.id !== id);
  //     this.saveCartToLocalStorage(cart);
  //     this.cartSource.next(cart);
  //   }

  //   clearCart() {
  //     const emptyCart: Cart = { id: this.generateId(), items: [] };
  //     this.saveCartToLocalStorage(emptyCart);
  //     this.cartSource.next(emptyCart);
  //   }
  // }
}

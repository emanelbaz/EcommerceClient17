import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../core/services/shop.service';
import { IProduct } from '../../shared/models/products';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product?: IProduct;
  quantity = 1; // ✅ نبدأ بواحد

  constructor(
    private shopService: ShopService,
    private cartService: CartService,
  ) {}

  // ngOnInit(): void {
  //   this.loadProduct();
  // }

  // loadProduct(): void {
  //   // const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  //   if (id) {
  //     this.shopService.getProduct(id).subscribe({
  //       next: (p) => (this.product = p),
  //       error: (err) => console.error(err)
  //     });
  //   }
  // }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart(product: IProduct): void {
    this.cartService.addItemToCart(product, this.quantity);
    this.quantity = 1; // ✅ نرجع الكمية 1 بعد الإضافة
  }
}

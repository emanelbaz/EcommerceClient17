import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../core/services/shop.service';
import { IProduct } from '../../shared/models/products';
import { CartService } from '../../core/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product!: IProduct;
  quantity = 1; // ✅ نبدأ بواحد

  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getPrpductById();
  }
  getPrpductById() {
    this.shopService
      .getProductById(this.productId)
      .subscribe((response: any) => {
        this.product = response;
        
      });
  }

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
    // this.cartService.addItemToCart(product, this.quantity);
    // this.quantity = 1; // ✅ نرجع الكمية 1 بعد الإضافة
  }
}

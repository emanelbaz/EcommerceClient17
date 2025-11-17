import { Component } from '@angular/core';
import { ProductsService } from '../shop/products-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
 searchQuery: string = '';
products: any[] = []
increaseQuantity(product: any) {
  if (!product.quantity) product.quantity = 0;
  product.quantity++;
}

decreaseQuantity(product: any) {
  if (!product.quantity) product.quantity = 0;
  if (product.quantity > 0) product.quantity--;
}

addToCart(product: any) {
  console.log('Added to cart:', product);
}

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  get filteredProducts() {
    if (!this.searchQuery) return this.products;
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  getOfferClass(offer: string) {
    if (offer.toLowerCase().includes('off')) return 'offer-discount';
    if (offer.toLowerCase().includes('new')) return 'offer-new';
    if (offer.toLowerCase().includes('delivery')) return 'offer-free-delivery';
    return 'offer-other';
  }

}

import { CartService } from './../core/services/cart.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../shared/models/products';
import { IBrand } from '../shared/models/Brands';
import { IType } from '../shared/models/ProductTypes';
import { ShopParams } from '../shared/shopParams';
import { ShopService } from '../core/services/shop.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  isLoading: boolean = false;
  item: any;
  value: any;
  @ViewChild('search', { static: false }) searchTerm?: ElementRef;
  products: IProduct[] = [];
  cartData: IProduct[] = [];
  brands: IBrand[] = [];
  types: IType[] = [];
  totalCount = 0;
  shopParams = new ShopParams();

  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];

  loading = false; // ✅ لتتبع حالة التحميل

  constructor(
    private shopService: ShopService,
    private CartService: CartService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    // this.loadFilters(); // جلب البراندات والانواع مرة واحدة
    this.getProducts();
  }

  // 🟡 تحميل المنتجات
  getProducts() {
    // this.isLoading = true;
    this.shopService.getProducts().subscribe((response: any) => {
      this.products = response.data;
      console.log(this.products);
    });

    // next: response => {
    //   this.products = response.data;
    //   this.shopParams.pageNumber = response.pageIndex;
    //   this.shopParams.pageSize = response.pageSize;
    //   this.totalCount = response.count;
    //   this.loading = false;
    // },
    // error: error => {
    //   console.error(error);
    //   this.loading = false;
    // }
  }

  // 🟢 تحميل البراندات والأنواع مرة واحدة فقط
  // loadFilters(): void {
  //   this.shopService.getBrands().subscribe({
  //     next: res => (this.brands = [{ id: 0, name: 'All' }, ...res]),
  //     error: err => console.error(err)
  //   });

  //   this.shopService.getTypes().subscribe({
  //     next: res => (this.types = [{ id: 0, name: 'All' }, ...res]),
  //     error: err => console.error(err)
  //   });
  // }

  // // 🔸 عند اختيار brand
  // onBrandSelected(brandId: number): void {
  //   if (this.shopParams.brandId !== brandId) {
  //     this.shopParams.brandId = brandId;
  //     this.shopParams.pageNumber = 1;
  //     this.getProducts();
  //   }
  // }

  // 🔸 عند اختيار type
  // onTypeSelected(typeId: number): void {
  //   if (this.shopParams.typeId !== typeId) {
  //     this.shopParams.typeId = typeId;
  //     this.shopParams.pageNumber = 1;
  //     this.getProducts();
  //   }
  // }

  // 🔸 عند تغيير الترتيب
  // onSortSelected(event: Event): void {
  //   const selectElement = event.target as HTMLSelectElement;
  //   this.shopParams.sort = selectElement.value;
  //   this.shopParams.pageNumber = 1;
  //   this.getProducts();
  // }
  toggleSidebar() {}
  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartData = JSON.parse(localStorage.getItem('cart')!);
      let existProduct = this.cartData.find(
        (cartProduct) => cartProduct.id === event.product.id
      );
      if (existProduct) {
        this.toaster.error('This product is already in your cart', 'Error');
      } else {
        this.cartData.push(event);
        console.log(this.cartData, 'cart');
        localStorage.setItem('cart', JSON.stringify(this.cartData));

        this.toaster.success('product added to cart successfuly', 'Success');
      }
    } else {
      this.cartData.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartData));
      this.toaster.success('product added to cart successfuly', 'Success');
    }
  }
  // 🔸 البحث
  onSearch(): void {
    const searchValue = this.searchTerm?.nativeElement.value.trim();
    if (searchValue !== this.shopParams.search) {
      this.shopParams.search = searchValue;
      this.shopParams.pageNumber = 1;
      this.getProducts();
    }
  }

  // 🔸 إعادة التصفية
  onReset(): void {
    if (this.searchTerm) this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }

  // 🔸 تغيير الصفحة
  onPageChanged(event: number): void {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }
  clearSearchText() {}
}

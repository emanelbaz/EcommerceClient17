import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../core/services/account.service';
import { CartService } from '../services/cart.service';
import { User } from '../../shared/models/user';
import { Cart } from '../../shared/models/cart';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  cartCount = 0;
  currentUser$!: Observable<User | null>;

  constructor(
    private accountService: AccountService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // ✅ اربط الـ currentUser$ عشان تستخدمه في الـ HTML بسهولة (async pipe)
    this.currentUser$ = this.accountService.currentUser$;

    // ✅ تابع التغييرات في السلة واحسب العدد الإجمالي
    this.cartService.cart$.subscribe((cart: Cart | null) => {
      this.cartCount = cart
        ? cart.items.reduce((sum, item) => sum + item.quantity, 0)
        : 0;
    });
  }

  logout() {
    this.accountService.logout();
  }
}

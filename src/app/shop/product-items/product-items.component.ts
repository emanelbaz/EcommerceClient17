import {
  Component,
  input,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  output,
  EventEmitter,
  Output,
} from '@angular/core';
import { IProduct } from '../../shared/models/products';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemsComponent implements OnInit {
  @ViewChild('quantityInput') quantityInput!: ElementRef;
  product = input.required<IProduct>();
  @Output() selectedProduct = new EventEmitter();
  amount: number = 0;

  cartData: IProduct[] = [];
  addedToCart: boolean = false;
  selected = false;

  constructor(private toaster: ToastrService, private router: Router) {}

  ngOnInit(): void {}

  toggleSelection() {
    this.selected = true;
    setTimeout(() => {
      this.quantityInput?.nativeElement.focus();
    }, 0);
    this.quantityInput?.nativeElement.focus();
  }
  addToCart() {
    // store products in local storage
    this.addedToCart = true;
    this.selected = false;
    this.selectedProduct.emit({
      product: this.product(),
      quantity: this.amount,
    });
  }

  goToProductDetails() {
    console.log('clicked');

    this.router.navigate(['shop', this.product().id]);
  }
}

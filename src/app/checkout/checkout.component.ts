import { PAYMENT_METHODS, SHIPPING_METHODS } from './checkout.constants';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CheckoutService } from '../core/services/checkout/checkout.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  private readonly checkoutService = inject(CheckoutService);

  checkoutForm: FormGroup = new FormGroup({
    buyerEmail: new FormControl(null, [Validators.required, Validators.email]),
    shippingMethod: new FormControl('STANDARD', Validators.required),
    paymentMethod: new FormControl('CASH', Validators.required),
    shippingAddress: new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      street: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      city: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      country: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    }),
  });

  shippingMethods = SHIPPING_METHODS;
  paymentMethods = PAYMENT_METHODS;

  submitFrom() {
    if (this.checkoutForm.invalid) {
    this.checkoutForm.markAllAsTouched();
    return;
  }

  let checkoutFormValue = this.checkoutForm.value;

  this.checkoutService.createOrder(checkoutFormValue).subscribe({
    next: (response) => {
      console.log('Order created successfully:', response);
    },
    error: (error) => {
      console.error('Error creating order:', error);
    },
  });

  }
}

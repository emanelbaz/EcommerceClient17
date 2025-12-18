import { PAYMENT_METHODS, SHIPPING_METHODS } from './checkout.constants';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  checkoutForm: FormGroup = new FormGroup({
    buyerEmail: new FormControl(null, [Validators.required, Validators.email]),
    shippingMethod: new FormControl(null, Validators.required),
    paymentMethod: new FormControl(null, Validators.required),
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

  submitFrom() {}
}

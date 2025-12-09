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
    shippingAddress: new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      buyerEmail: new FormControl(null, [
        Validators.required,
        Validators.email,
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
      ]) 
    }),
  });

  submitFrom() {}
}

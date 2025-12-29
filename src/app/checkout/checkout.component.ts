import { PAYMENT_METHODS, SHIPPING_METHODS } from './checkout.constants';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CheckoutService } from '../core/services/checkout/checkout.service';
import { ICheckoutRequest } from '../shared/interfaces/icheckout-request';
import { AccountService } from '../core/services/account.service';
import { environment } from '../environments/environment';
import { IUserToken } from '../shared/interfaces/iuser-token';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {

  private readonly checkoutService = inject(CheckoutService);
  private readonly accountService = inject(AccountService);
  userData :IUserToken = {} as IUserToken;
  loggedUserEmail:string|null = null;

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

  ngOnInit(): void{
    console.log('CheckoutComponent initialized');
    if(localStorage.getItem(environment.token) !== null){
          this.userData =  jwtDecode<IUserToken>(localStorage.getItem(environment.token)!)
          console.log('Decoded user data:', this.userData);
          this.loggedUserEmail = this.userData['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
          console.log('Logged user email:', this.loggedUserEmail);
        }
  }

  submitFrom() {
    if (this.checkoutForm.invalid) {
    this.checkoutForm.markAllAsTouched();
    return;
  }

  let checkoutFormValue = this.checkoutForm.value;

  const orderValue :ICheckoutRequest = {
    ...checkoutFormValue,
    basketId: this.loggedUserEmail,
    userId: 1
  };

  this.checkoutService.createOrder(orderValue).subscribe({
    next: (response) => {
      console.log('Order created successfully:', response);
    },
    error: (error) => {
      console.error('Error creating order:', error);
    },
  });

  }
}

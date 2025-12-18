export interface ICheckoutRequest {
  basketId: string;
  userId: number;
  buyerEmail: string;
  paymentMethod: string;
  shippingMethod: string;
  shippingAddress: ShippingAddress;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  country: string;
}

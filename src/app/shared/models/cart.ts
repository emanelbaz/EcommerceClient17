import { CartItem } from './cartItem';

export interface Cart {
  id: string;
  items: CartItem[];
}

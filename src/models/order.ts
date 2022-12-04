import { Product } from "./product";

export interface CartItem {
  amount: number;
  product: Product;
}

export interface Cart {
  [productId: string]: CartItem;
}

export interface Order {
  orderId: string;
  email: string;
  items: Cart;
  shippingMethod: string;
  shippingAddress: string;
  paymentMethod: string;
  orderTotal: number;
  status: OrderStatus;
}

export interface Orders {
  [orderId: string]: Order;
}

export enum OrderStatus {
  CONFIRMED = "confirmed",
  PENDING = "pending",
  PAID = "paid",
  DISPATCHED = "dispatched",
  CANCELLED = "cancelled",
  COMPLETE = "complete",
}

// application/ports.ts  — ConardLi

import { Order } from "../domain/order";

// 支付
export interface PaymentService {
  tryPay(amount: PriceCents): Promise<boolean>;
}

// 通知
export interface NotificationService {
  notify(message: string): void;
}

// 本地存储
export interface OrdersStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}
export interface cartStorageService {
  emptyCart(): void;
}

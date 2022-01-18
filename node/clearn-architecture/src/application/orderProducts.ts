// application/orderProducts.ts — ConardLi

import { Cart } from "../domain/cart";
import { createOrder, Order } from "../domain/order";
import { User } from "../domain/user";
import {
  cartStorageService,
  NotificationService,
  OrdersStorageService,
  PaymentService,
} from "./ports";

const payment: PaymentService = {
  tryPay: function (amount: number): Promise<boolean> {
    throw new Error("Function not implemented.");
  },
}; //需要实现接口
const notifier: NotificationService = {
  notify: function (message: string): void {
    throw new Error("Function not implemented.");
  },
};
const orderStorage: OrdersStorageService = {
  orders: [],
  updateOrders: function (orders: Order[]): void {
    throw new Error("Function not implemented.");
  },
};
const cartStorage: cartStorageService = {
  emptyCart: function (): void {
    throw new Error("Function not implemented.");
  },
};

async function orderProducts(user: User, cart: Cart) {
  const order = createOrder(user, cart);

  // Try to pay for the order;
  // Notify the user if something is wrong:
  const paid = await payment.tryPay(order.total);
  if (!paid) return notifier.notify("Oops! 🤷");

  // Save the result and clear the cart:
  const { orders } = orderStorage;
  orderStorage.updateOrders([...orders, order]);
  cartStorage.emptyCart();
}

export function useOrderProducts() {
  const notifier = useNotifier();
  const payment = usePayment();
  const orderStorage = useOrdersStorage();
  const cartStorage = useCartStorage();

  async function orderProducts(user: User, cart: Cart) {
    const order = createOrder(user, cart);

    const paid = await payment.tryPay(order.total);
    if (!paid) return notifier.notify("Oops! 🤷");

    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);
    cartStorage.emptyCart();
  }

  return { orderProducts };
}

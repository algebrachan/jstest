// domain/order.ts  — ConardLi
import { Cart } from "./cart";
import { User } from "./user";
import { currentDatetime } from "../lib/datetime";
import {Product, totalPrice } from "./product";
export type OrderStatus = "new" | "delivery" | "completed";

export type Order = {
  user: UniqueId;
  cart: Cart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
};

export function createOrder(user: User, cart: Cart,created: currentDatetime): Order {
  return {
    user: user.id,
    products,
    created,
    status: "new",
    total: totalPrice(cart.products),
  };
}

type OrderProducts = (user: User, cart: Cart) => Promise<void>;

// shared-kernel.d.ts

// 共享内核

type Email = string;
type UniqueId = string;
type DateTimeString = string;
type PriceCents = number;
type Ingredient = object;

type Currency = "RUB" | "USD" | "EUR" | "SEK";
type AmountCents = number;

type Price = {
  value: AmountCents;
  currency: Currency;
};

// services/storageAdapter.ts

import { OrdersStorageService } from "../application/ports";
import { useStore } from "./store";

export function useOrdersStorage(): OrdersStorageService {
  return useStore();
}

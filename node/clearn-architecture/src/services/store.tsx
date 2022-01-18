// store.tsx  — ConardLi
import React, { useContext, useState } from "react";

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
  // ...Other entities...
  const [orders, setOrders] = useState([]);

  const value = {
    // ...
    orders,
    updateOrders: setOrders,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

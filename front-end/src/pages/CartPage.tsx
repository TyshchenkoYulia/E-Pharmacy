// import { useState } from "react";
// import type { Product } from "../types/productTypes";
import EmptyCart from "../components/EmptyCart";
// import OrderCart from "../components/OrderCart";
// import OrderList from "../components/OrderList";

export default function CartPage() {
  // const [cartItems, setCartItems] = useState<Product[]>([]);

  return (
    <section
      className="pt-[120px] pb-[80px] px-[20px] 
    tablet:pt-[120px] tablet:pb-[150px] tablet:px-[32px]  "
    >
      <h2 className="text-[28px] leading-[32px] font-bold mb-[30px]">Cart</h2>

      <EmptyCart />

      {/* {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <OrderCart />
          <OrderList />
        </>
      )} */}
    </section>
  );
}

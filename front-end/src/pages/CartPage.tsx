import { Link } from "react-router-dom";
import { useState } from "react";
import type { Product } from "../types/productTypes";

export default function CartPage() {
  // Тут поки що мок-порожній кошик
  const [cartItems, setCartItems] = useState<Product[]>([]);

  return (
    <section
      className="pt-[120px] pb-[80px] px-[20px] 
    tablet:pt-[120px] tablet:pb-[150px] tablet:px-[32px] text-center "
    >
      {cartItems.length === 0 ? (
        <>
          <p className="text-[16px] text-primaryText font-semibold">
            Your cart is empty
          </p>
          <p className="text-[14px] text-secondaryText">
            You haven’t added any products yet.
          </p>
          <Link
            to="/medicine"
            className="px-6 py-3 bg-greenPrimary text-whitePrimary rounded-[24px] 
              transition-transform hover:scale-105 hover:text-hoverGreen"
          >
            Continue shopping
          </Link>
        </>
      ) : (
        <div className="flex flex-col gap-4 w-full max-w-[600px]">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border p-4 rounded-lg"
            >
              <span>{product.name}</span>
              <span>£{product.price}</span>
            </div>
          ))}

          {/* Підсумок */}
          <div className="flex justify-between mt-6 font-bold text-lg">
            <span>Total:</span>
            <span>£</span>
          </div>

          <button className="mt-4 px-6 py-3 bg-greenPrimary text-whitePrimary rounded-[24px] hover:bg-green-700 transition">
            Checkout
          </button>
        </div>
      )}
    </section>
  );
}

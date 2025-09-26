import { useState } from "react";
import type { Product } from "../assets/data/products";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";

interface Props {
  product: Product;
}

export default function ProductOverview({ product }: Props) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    console.log("Added to cart:", { product, quantity });
    // в кошик
  };

  return (
    <section
      className=" flex flex-col items-center gap-[28px] 
    tablet:flex-row tablet:justify-center tablet:gap-[16px]
    desktop:flex-col"
    >
      <div
        className="h-[335px] w-[335px] border border-greenPrimary rounded-[27px] overflow-hidden
      tablet:h-[284px] tablet:w-[364px]
      desktop:h-[337px] desktop:w-[364px]"
      >
        <img
          src={product.photo}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>

      <div
        className="flex flex-col boder border-whitePrimary bg-whitePrimary
      h-[160px] w-[335px] rounded-[20px] p-[20px]
      tablet:h-[284px] tablet:w-[324px] tablet:p-[32px]
      desktop:w-[364px] desktop:h-[240px]"
      >
        <div
          className="flex items-center font-bold text-primaryText text-[16px] leading-[20px]
        justify-between tablet:text-[24px] tablet:leading-[30px]"
        >
          <h3>{product.name}</h3>
          <p>
            <CurrencyPoundIcon />
            {product.price}
          </p>
        </div>

        <p
          className="mt-[4px] mb-[25px] text-[12px] leading-[18px] text-secondaryText
        tablet:mt-[14px] tablet:mb-[100px] tablet:text-[18px] tablet:leading-[24px]
        desktop:mb-[60px]"
        >
          {product.suppliers}
        </p>

        <div className="flex items-center  justify-between ">
          <div
            className="flex items-center py-[12px] px-[18px] gap-[20px] border
             border-secondaryText rounded-[60px] text-[16px] leading-[20px]"
          >
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="text-greenPrimary"
            >
              -
            </button>
            <span className=" text-center text-secondaryText">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="text-greenPrimary "
            >
              +
            </button>
          </div>

          <button
            onClick={addToCart}
            className="px-[32px] py-[13px] bg-greenPrimary text-whitePrimary 
         rounded-[24px] 
         transition-transform hover:scale-110 hover:text-hoverGreen"
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}

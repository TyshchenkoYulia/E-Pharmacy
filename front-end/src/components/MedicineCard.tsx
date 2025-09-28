import type { Product } from "../types/productTypes";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { Link } from "react-router-dom";

export default function MedicineCard({ product }: { product: Product }) {
  const addToCart = () => {
    console.log("Added to cart:", { product });
    //  в кошик
  };

  return (
    <section className=" flex flex-col items-center gap-[8px]">
      <div
        className="h-[300px] w-[335px] border border-greenPrimary rounded-[20px] overflow-hidden
      tablet:h-[260px] tablet:w-[226px]
      desktop:h-[280px] desktop:w-[280px]"
      >
        <img
          src={product.photo}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>

      <div
        className="flex flex-col boder border-whitePrimary bg-whitePrimary
      h-[135px] w-[335px] rounded-[20px] p-[20px]
      tablet:w-[226px] desktop:w-[280px] desktop:h-[150px]"
      >
        <div
          className="flex items-center font-bold text-primaryText text-[16px] leading-[20px]
        justify-between tablet:text-[18px] tablet:leading-[22px]"
        >
          <h3>{product.name}</h3>
          <p>
            <CurrencyPoundIcon />
            {product.price}
          </p>
        </div>

        <p
          className="mt-[4px] mb-[13px] text-[12px] leading-[14px] text-secondaryText
        tablet:mt-[8px] desktop:mt-[14px]"
        >
          {product.suppliers}
        </p>

        <div className="flex items-center  justify-between ">
          <button
            onClick={addToCart}
            className="px-[16px] py-[10px] bg-greenPrimary text-whitePrimary 
         rounded-[24px] 
         transition-transform hover:scale-110 hover:text-hoverGreen"
          >
            Add to cart
          </button>
          <Link
            to={`/product/${product.id}`}
            className="text-primaryText text-[12px] leading-[18px] underline 
            transition-transform hover:scale-110 hover:text-hoverGreen"
          >
            Details
          </Link>
        </div>
      </div>
    </section>
  );
}

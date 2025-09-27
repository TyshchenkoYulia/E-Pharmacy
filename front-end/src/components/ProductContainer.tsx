import { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";

export default function ProductContainer() {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  return (
    <section
      className="mt-[8px] mx-auto p-[20px] w-[335px] border border-none bg-whitePrimary rounded-[27px]
    tablet:mt-[18px] tablet:p-[32px] tablet:w-[704px]
     desktop:mt-0 desktop:p-[40px] desktop:w-[800px]"
    >
      <div className="flex gap-[20px] ">
        <button
          className={` ${
            activeTab === "description"
              ? "py-[8px] px-[25px] border font-500 bg-greenPrimary text-whitePrimary rounded-[40px] font-semibold transition-transform hover:scale-105 hover:text-whitePrimary"
              : "py-[8px] px-[25px] border rounded-[40px] text-hoverGreen bg-lightGreen transition-transform hover:scale-105 hover:text-hoverGreen"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`${
            activeTab === "reviews"
              ? "py-[8px] px-[25px] border font-500 bg-greenPrimary text-whitePrimary rounded-[40px] font-semibold transition-transform hover:scale-105 hover:text-whitePrimary"
              : "py-[8px] px-[25px] border rounded-[40px] text-hoverGreen bg-lightGreen transition-transform hover:scale-105 hover:text-hoverGreen"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className="mt-[20px] tablet:mt-[32px]">
        {activeTab === "description" && <ProductDescription />}

        {activeTab === "reviews" && <ProductReviews />}
      </div>
    </section>
  );
}

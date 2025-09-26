import { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";

export default function ProductContainer() {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  return (
    <div className="mt-[40px]">
      <div className="flex gap-[20px] ">
        <button
          className={`pb-2 ${
            activeTab === "description"
              ? "border-b-2 border-greenPrimary font-semibold"
              : "text-secondaryText"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`pb-2 ${
            activeTab === "reviews"
              ? "border-b-2 border-greenPrimary font-semibold"
              : "text-secondaryText"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className="mt-[20px]">
        {activeTab === "description" && <ProductDescription />}

        {activeTab === "reviews" && <ProductReviews />}
      </div>
    </div>
  );
}

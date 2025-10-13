import { useMemo } from "react";
import type { ProductReview } from "../types/productTypes";
import ProductReviewItem from "./ProductReviewItem";
import productReview from "../assets/data/productReview";

export default function ProductReviewList() {
  const randomReviews = useMemo(() => {
    const shuffled = [...productReview].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, 3);
  }, []);

  return (
    <div className="flex flex-col gap-[20px]">
      {randomReviews.map((review: ProductReview) => (
        <ProductReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}

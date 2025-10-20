import { useEffect, useState } from "react";
import type { AppReview } from "../types/reviewTypes";
import axios from "axios";

export default function ReviewsItem() {
  const [reviews, setReviews] = useState<AppReview[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get<{ data: AppReview[] }>(
          "http://localhost:3000/api/reviews"
        );
        setReviews(response.data.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  const visibilityClasses = [
    "flex",
    "hidden tablet:flex",
    "hidden desktop:flex",
  ];

  return (
    <ul
      className="mt-[64px] tablet:mt-[88px] px-4 flex justify-center 
    gap-[16px] desktop:gap-[28px]"
    >
      {reviews.map((review, idx) => (
        <li
          key={idx}
          className={`${visibilityClasses[idx]} relative flex flex-col items-center min-w-[280px]`}
        >
          <img
            src={review.photo}
            alt={review.name}
            className="absolute top-[-24px] left-1/2 -translate-x-1/2 w-16 h-16 
            rounded-full object-cover border-2 border-whitePrimary shadow-md"
          />

          <div className="bg-whitePrimary rounded-[27px] shadow-lg w-[280px] h-[232px] p-6 flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-[20px] leading-[30px] mt-8">
              {review.name}
            </h3>
            <p className="text-[16px] leading-[20px] text-secondaryText mt-4">
              {review.testimonial}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

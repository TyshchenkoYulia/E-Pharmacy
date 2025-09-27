import type { ProductReview } from "../types/productTypes";
import StarIcon from "../assets/img/star-icon.svg";
import StarIconEmpty from "../assets/img/star-icon-empty.svg";

interface Props {
  review: ProductReview;
}

export default function ProductReviewItem({ review }: Props) {
  return (
    <section className="flex flex-col gap-[14px] border border-grayColor rounded-[20px] py-[14px] px-[28px]">
      <div className="flex justify-between  ">
        <div className="flex gap-[20px]">
          <img
            src={review.photo}
            alt={review.name}
            className="w-[44px] h-[44px] rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h4
              className="text-[16px] leading-[20px] font-bold
            tablet:text-[18px] tablet:leading-[22px]"
            >
              {review.name}
            </h4>
            <span className="text-[12px] leading-[18px] text-secondaryText font-400">
              {review.date}
            </span>
          </div>
        </div>

        <div className="flex gap-[6px] items-start">
          {/* mob */}
          <div className="flex items-center gap-[4px] tablet:hidden">
            <img src={StarIcon} alt="Star" className="w-[16px] h-[16px]" />
          </div>

          {/* tablet */}
          <div className="hidden tablet:flex gap-[4px]">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < review.rating ? StarIcon : StarIconEmpty}
                alt={i < review.rating ? "Star Icon" : "Star Icon Empty"}
                className="w-[20px] h-[20px]"
              />
            ))}
          </div>
          <span className="text-[14px] leading-[18px] font-500 text-primaryText">
            {review.rating}
          </span>
        </div>
      </div>

      <p
        className=" text-[14px] leading-[18px] text-secondaryText
      tablet:text-[16px] tablet:leading-[24px]"
      >
        {review.text}
      </p>
    </section>
  );
}

import ReviewsItem from "./ReviewsItem";

export default function Reviews() {
  return (
    <section
      className="py-[40px] px-[20px] mb-[40px] 
    tablet:py-[60px] tablet:px-[32px] tablet:mb-[60px]"
    >
      <h2
        className="font-sans font-bold text-[28px] leading-[32px]  text-center mb-[14px]
          tablet:text-[40px] tablet:leading-[48px] "
      >
        Reviews
      </h2>
      <p
        className="text-[14px] leading-[18px] text-secondaryText  text-center
          tablet:text-[16px] tablet:leading-[20px]"
      >
        Search for Medicine, Filter by your location
      </p>

      <ReviewsItem />
    </section>
  );
}

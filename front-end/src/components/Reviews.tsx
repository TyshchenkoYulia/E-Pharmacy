import ReviewsItem from "./ReviewsItem";

export default function Reviews() {
  return (
    <section
      className="mt-[80px] mb-[80px] mx-[20px]
    tablet:mt-[120px] tablet:mb-[120px] tablet:mx-[32px] 
    desktop:mx-[120px]"
    >
      <div className="max-w-7xl mx-auto px-4 tablet:px-8">
        <div className="text-center mb-8">
          <h2
            className="font-sans font-bold text-[28px] leading-[32px] 
          tablet:text-[40px] tablet:leading-[48px] "
          >
            Reviews
          </h2>
          <p
            className="text-[14px] leading-[18px] text-secondaryText mt-2 
          tablet:text-[16px] tablet:leading-[20px]"
          >
            Search for Medicine, Filter by your location
          </p>
        </div>
        <ReviewsItem />
      </div>
    </section>
  );
}

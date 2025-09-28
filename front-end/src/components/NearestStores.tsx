import NearestStoresList from "./NearestStoresList";

export default function NearestStores() {
  return (
    <section
      className="flex flex-col justify-center items-center 
    mt-[80px] mx-[20px]  tablet:mt-[120px] tablet:mx-[32px]"
    >
      <div className="flex flex-col gap-[14px] justify-center items-center">
        <h2
          className="text-[28px] leading-[32px] font-bold w-[290px]  text-center
        tablet:w-full tablet:text-[40px] tablet:leading-[48px]"
        >
          Your Nearest Medicine Store
        </h2>
        <p
          className="text-[14px] leading-[18px] text-secondaryText
         tablet:text-[16px] tablet:leading-[20px]"
        >
          Search for Medicine, Filter by your location
        </p>
      </div>

      <div>
        <NearestStoresList />
      </div>
    </section>
  );
}

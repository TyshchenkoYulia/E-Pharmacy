import NearestStoresList from "./NearestStoresList";

export default function NearestStores() {
  return (
    <section className="py-[40px] px-[20px]  tablet:py-[60px] tablet:px-[32px]">
      <h2
        className=" mx-auto text-[28px] leading-[32px] font-bold w-[290px]  text-center
        tablet:w-full tablet:text-[40px] tablet:leading-[48px] mb-[14px]"
      >
        Your Nearest Medicine Store
      </h2>
      <p
        className=" text-center text-[14px] leading-[18px] text-secondaryText
         tablet:text-[16px] tablet:leading-[20px] mb-[40px]"
      >
        Search for Medicine, Filter by your location
      </p>

      <NearestStoresList />
    </section>
  );
}

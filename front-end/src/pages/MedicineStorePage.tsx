import StoresList from "../components/StoresList";

export default function MedicineStorePage() {
  return (
    <section
      className=" pt-[120px] pb-[80px] px-[20px] 
    tablet:pt-[120px] tablet:pb-[150px] tablet:px-[32px] "
    >
      <h1 className="text-[28px] leading-[32px] font-bold">Medicine Store</h1>
      <StoresList />
    </section>
  );
}

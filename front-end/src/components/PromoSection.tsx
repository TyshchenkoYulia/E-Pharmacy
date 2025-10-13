import Features from "./Features";
import PromoContent from "./PromoContent";

export default function PromoSection() {
  return (
    <section className="py-[40px] px-[20px] tablet:py-[60px] tablet:px-[32px]">
      <PromoContent />
      <Features />
    </section>
  );
}

import MainBanner from "../components/MainBanner";
import NearestStores from "../components/NearestStores";
import PromoBanners from "../components/PromoBanners";
import PromoSection from "../components/PromoSection";
import Reviews from "../components/Reviews";

export default function HomePage() {
  return (
    <>
      <MainBanner />
      <PromoBanners />
      <NearestStores />
      <PromoSection />
      <Reviews />
    </>
  );
}

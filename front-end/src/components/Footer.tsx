import FooterContent from "./FooterContent";
import FooterSocials from "./FooterSocials";
import FooterNav from "./FooterNav";
import Logo from "./Logo";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      className="bg-greenPrimary text-whiteSecondary
    p-[20px] tablet:p-[32px] desktop:p-[40px]"
    >
      <div className="flex justify-between items-center tablet:ml-[12px] tablet:mt-[12px]">
        <Logo variant="white" />
        <FooterSocials />
      </div>
      <div className="tablet:flex tablet:justify-between  tablet:items-center">
        <FooterContent />
        <FooterNav />
      </div>
      <FooterBottom />
    </footer>
  );
}

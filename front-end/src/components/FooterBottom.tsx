import { Link } from "react-router-dom";

export default function FooterBottom() {
  return (
    <section
      className="border-t  pt-4 ml-[20px] mr-[20px] mt-[80px] 
    tablet:mt-[88px] tablet:ml-[32px] tablet:mr-[32px]"
    >
      <div
        className="flex items-center ml-[20px] mt-[20px] gap-[10px] text-[10px] leading-[10px]
       tablet:mt-[32px] tablet:text-[14px] tablet:leading-[18px] tablet:gap-[24px] tablet:justify-center"
      >
        <p>© E-Pharmacy 2023. All Rights Reserved</p>
        <span className="h-4 border-l" />

        <Link
          to="/privacy-policy"
          className="transition-transform hover:scale-110 hover:text-hoverGreen"
        >
          Privacy Policy
        </Link>
        <span className="h-4 border-l " />
        <Link
          to="/terms"
          className="transition-transform hover:scale-110 hover:text-hoverGreen"
        >
          Terms & Conditions
        </Link>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function FooterBottom() {
  return (
    <div
      className="border-t  pt-4 px-[20px]  mt-[80px] 
     tablet:px-[32px] "
    >
      <div
        className="flex   pt-[20px] gap-[10px] 
        text-[10px] leading-[10px]
       tablet:pt-[32px] tablet:text-[14px] tablet:leading-[18px] 
       tablet:gap-[24px] tablet:justify-center"
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
    </div>
  );
}

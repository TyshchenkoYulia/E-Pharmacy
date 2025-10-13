import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <nav
      className="flex mt-[40px] text-[14px] leading-[18px] gap-[32px] font-semibold 
      tablet:text-[16px] tablet:leading-[20px]"
    >
      <Link
        to="/"
        className="transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        Home
      </Link>
      <Link
        to="/medicine-store"
        className="transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        Medicine store
      </Link>
      <Link
        to="/medicine"
        className="transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        Medicine
      </Link>
    </nav>
  );
}

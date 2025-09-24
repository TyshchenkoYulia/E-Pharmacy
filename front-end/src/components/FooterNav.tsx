import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <section className="mt-[40px] ml-[20px] tablet:mr-[32px]">
      <nav
        className="flex text-[14px] leading-[18px] gap-[32px] font-semibold 
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
    </section>
  );
}

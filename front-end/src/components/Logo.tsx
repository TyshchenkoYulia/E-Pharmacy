import { Link } from "react-router-dom";
import LogoGreen from "../assets/img/logo-green.svg";
import LogoWhite from "../assets/img/logo-white.svg";

interface LogoProps {
  variant?: "default" | "white"; // default = зелений + чорний, white = білий + білий
}

export default function Logo({ variant = "default" }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <Link
      to="/"
      className="flex items-center gap-3  mobile:gap-3 tablet:gap-4 desktop:gap-4"
    >
      <img
        src={isWhite ? LogoWhite : LogoGreen}
        alt="E-Pharmacy Logo"
        className="w-8 h-8 tablet:w-11 tablet:h-11 desktop:w-11 desktop:h-11"
      />
      <span
        className={`font-sans font-semibold text-[16px] tablet:text-[20px] desktop:text-[20px] ${
          isWhite ? "text-whitePrimary" : "text-primaryText"
        }`}
      >
        E-Pharmacy
      </span>
    </Link>
  );
}

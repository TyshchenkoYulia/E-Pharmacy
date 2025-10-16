import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

interface NavigationLinksProps {
  isHome?: boolean;
  onLinkClick?: () => void;
}

export default function NavigationLinks({
  isHome = false,
  onLinkClick,
}: NavigationLinksProps) {
  const textClass = `
    font-sans font-semibold 
    text-whitePrimary desktop:${
      isHome ? "text-whitePrimary" : "text-primaryText"
    }
  `;

  return (
    <nav
      className=" flex flex-col pt-[300px] pb-[44px] gap-6 h-full items-center justify-between
      text-[14px] text-whitePrimary
     desktop:flex-row desktop:p-0  "
    >
      <div
        className="flex flex-col gap-[4px] items-center desktop:flex-row 
      absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 "
      >
        <Link
          to="/"
          onClick={onLinkClick}
          className={`${textClass} font-sans font-semibold  border-whitePrimary 
         border-[8px] rounded-[60px] px-[20px] py-[8px] text-center  `}
        >
          Home
        </Link>
        <Link
          to="/medicine-store"
          onClick={onLinkClick}
          style={{ color: "#93939A" }}
          className={`${textClass}  font-sans font-semibold  border-whitePrimary 
         border-[8px] rounded-[60px] px-[20px] py-[8px] text-center
         bg-whitePrimary `}
        >
          Medicine store
        </Link>
        <NavLink
          to="/medicine"
          onClick={onLinkClick}
          // style={{ color: "#93939A" }}
          className={({ isActive }) =>
            `${textClass} font-sans font-semibold border-[8px] rounded-[60px] 
       px-[20px] py-[8px] text-center ${
         isActive
           ? "bg-greenPrimary border-whitePrimary text-whitePrimary"
           : "border-whitePrimary bg-whitePrimary text-secondaryText"
       }`
          }
        >
          Medicine
        </NavLink>
      </div>

      <div className="">
        <Link
          to="/register"
          onClick={onLinkClick}
          className={`${textClass} font-sans font-semibold border  border-whitePrimary 
          rounded-[60px]  px-[20px] py-[8px] text-center`}
        >
          Register
        </Link>
        <Link
          to="/login"
          onClick={onLinkClick}
          className={`${textClass} font-sans font-semibold   px-[20px] py-[8px] text-center underline underline-offset-4`}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

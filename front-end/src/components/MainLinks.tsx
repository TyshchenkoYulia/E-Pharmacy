import { NavLink } from "react-router-dom";

interface MainLinksProps {
  isHome?: boolean;
  onLinkClick?: () => void;
  isInModal?: boolean;
}

export function MainLinks({ onLinkClick }: MainLinksProps) {
  return (
    <div
      className="relative flex flex-col gap-[3px] items-center desktop:flex-row 
    desktop:absolute desktop:left-1/2 desktop:transform desktop:-translate-x-1/2"
    >
      <span
        className="absolute top-[50px] left-[45%] w-4 h-2 bg-whitePrimary 
      desktop:top-[33%] desktop:left-[90px] desktop:h-4"
      ></span>
      <span
        className="absolute top-[105px] left-[45%] w-4 h-2 bg-whitePrimary 
      desktop:top-[33%] desktop:left-[245px] desktop:h-4"
      ></span>
      <NavLink
        to="/"
        onClick={onLinkClick}
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-greenPrimary text-whitePrimary"
              : "bg-whitePrimary text-secondaryText"
          } border-[8px] border-whitePrimary rounded-[60px] px-[20px] py-[8px] 
          text-center `
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/medicine-store"
        onClick={onLinkClick}
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-greenPrimary text-whitePrimary"
              : "bg-whitePrimary text-secondaryText"
          } border-[8px] border-whitePrimary rounded-[60px] px-[20px] py-[8px] 
          text-center `
        }
      >
        Medicine store
      </NavLink>

      <NavLink
        to="/medicine"
        onClick={onLinkClick}
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-greenPrimary text-whitePrimary"
              : "bg-whitePrimary text-secondaryText"
          } border-[8px] border-whitePrimary rounded-[60px] px-[20px] py-[8px] 
          text-center `
        }
      >
        Medicine
      </NavLink>
    </div>
  );
}

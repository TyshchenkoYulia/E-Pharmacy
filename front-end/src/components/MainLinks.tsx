import { NavLink } from "react-router-dom";

interface MainLinksProps {
  isHome?: boolean;
  onLinkClick?: () => void;
  isInModal?: boolean;
}

export function MainLinks({ onLinkClick }: MainLinksProps) {
  return (
    <div
      className="flex flex-col gap-[4px] items-center desktop:flex-row 
    desktop:absolute desktop:left-1/2 desktop:transform desktop:-translate-x-1/2"
    >
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

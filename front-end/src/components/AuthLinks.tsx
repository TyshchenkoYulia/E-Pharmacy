import { NavLink } from "react-router-dom";

interface AuthLinksProps {
  isAuthenticated?: boolean;
  onLinkClick?: () => void;
  onLogoutClick?: () => void;
  isHome?: boolean;
  isInModal?: boolean;
}

export function AuthLinks({
  isAuthenticated = false,
  onLinkClick,
  onLogoutClick,
  isHome = false,
  isInModal = false,
}: AuthLinksProps) {
  const textClass = `font-sans font-semibold ${
    isInModal || isHome ? "text-whitePrimary " : "text-greenPrimary "
  }`;

  return (
    <div className="flex items-center gap-4">
      {isAuthenticated ? (
        <button
          onClick={onLogoutClick}
          className={`${textClass} border border-whitePrimary rounded-[60px] 
          px-[20px] py-[8px] text-center underline underline-offset-4`}
        >
          Logout
        </button>
      ) : (
        <>
          <NavLink
            to="/register"
            onClick={onLinkClick}
            className={`${textClass} border border-whitePrimary rounded-[60px] 
            px-[20px] py-[8px] text-center`}
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            onClick={onLinkClick}
            className={`${textClass} px-[20px] py-[8px] text-center underline underline-offset-4`}
          >
            Login
          </NavLink>
        </>
      )}
    </div>
  );
}

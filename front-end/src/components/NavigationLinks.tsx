import { Link } from "react-router-dom";

interface NavigationLinksProps {
  isHome?: boolean;
}

export default function NavigationLinks({
  isHome = false,
}: NavigationLinksProps) {
  const textClass = isHome ? "text-whitePrimary" : "text-primaryText";

  return (
    <nav className="flex gap-6">
      <Link to="/" className={`${textClass} font-sans font-semibold`}>
        Home
      </Link>
      <Link
        to="/medicine-store"
        className={`${textClass} font-sans font-semibold`}
      >
        Medicine store
      </Link>
      <Link to="/medicine" className={`${textClass} font-sans font-semibold`}>
        Medicine
      </Link>
      <Link to="/register" className={`${textClass} font-sans font-semibold`}>
        Register
      </Link>
      <Link to="/login" className={`${textClass} font-sans font-semibold`}>
        Login
      </Link>
    </nav>
  );
}

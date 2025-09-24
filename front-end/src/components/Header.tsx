import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-sm z-50 flex 
    items-center justify-between px-4 tablet:px-6 desktop:px-8 h-16"
    >
      <Logo variant={isHome ? "white" : "default"} />
      <NavigationLinks isHome={isHome} />
    </header>
  );
}

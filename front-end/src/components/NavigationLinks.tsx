import { AuthLinks } from "./AuthLinks";
import { MainLinks } from "./MainLinks";

interface NavigationLinksProps {
  isHome?: boolean;
  onLinkClick?: () => void;
  isAuthenticated?: boolean;
  onLogoutClick?: () => void;
  isInModal?: boolean;
}

export default function NavigationLinks({
  isHome = false,
  onLinkClick,
  isAuthenticated = false,
  onLogoutClick,
  isInModal = false,
}: NavigationLinksProps) {
  return (
    <nav
      className="flex flex-col pt-[300px] pb-[44px] gap-6 h-full items-center justify-between
      text-[14px] text-whitePrimary
      desktop:flex-row desktop:p-0"
    >
      <MainLinks
        isHome={isHome}
        onLinkClick={onLinkClick}
        isInModal={isInModal}
      />
      <AuthLinks
        isHome={isHome}
        isAuthenticated={isAuthenticated}
        onLogoutClick={onLogoutClick}
        onLinkClick={onLinkClick}
        isInModal={isInModal}
      />
    </nav>
  );
}

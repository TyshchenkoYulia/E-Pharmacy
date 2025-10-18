import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import CartButton from "./CartButton";
import ConfirmLogoutModal from "./ConfirmLogoutModal";

Modal.setAppElement("#root");

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoutClick = () => setIsLogoutModalOpen(true);

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);
    handleLogout();
  };
  const handleCancelLogout = () => setIsLogoutModalOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUserName(null);
    setIsAuthenticated(false);

    console.log("Успішний вихід!");
  };

  useEffect(() => {
    if (location.state?.userName) {
      setUserName(location.state.userName);
      localStorage.setItem("userName", location.state.userName);
    } else {
      const storedName = localStorage.getItem("userName");
      if (storedName) setUserName(storedName);
      else {
        const token = localStorage.getItem("token");
        if (token) {
          try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            setUserName(payload.email.split("@")[0]);
          } catch {
            console.warn("Token parsing failed");
          }
        }
      }
    }

    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [location.state]);

  const getUserInitial = () => (userName ? userName[0].toUpperCase() : "");

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-sm 
    z-50 flex items-center justify-between px-[20px] py-[30px] 
    tablet:px-[36px] desktop:px-[100px] desktop:py-[40px]"
    >
      <Logo variant={isHome ? "white" : "default"} />

      {/* Десктоп */}
      <div className="hidden desktop:flex items-center gap-4">
        <NavigationLinks
          isHome={isHome}
          onLinkClick={closeMenu}
          isAuthenticated={isAuthenticated}
          onLogoutClick={handleLogoutClick}
          isInModal={isMenuOpen}
        />

        {userName && isAuthenticated && (
          <>
            <CartButton />
            <div className="w-10 h-10 rounded-full bg-whitePrimary flex items-center justify-center text-greenPrimary font-bold">
              {getUserInitial()}
            </div>
          </>
        )}
      </div>

      {/* Моб + планшет*/}
      <div className="desktop:hidden flex items-center gap-4">
        {userName && isAuthenticated && (
          <>
            <CartButton />
            <div className="w-10 h-10 rounded-full bg-whitePrimary flex items-center justify-center text-greenPrimary font-bold">
              {getUserInitial()}
            </div>
          </>
        )}

        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon style={{ color: "white", fontSize: 40 }} />
          ) : (
            <MenuIcon
              style={{ color: isHome ? "white" : "#59B17A", fontSize: 40 }}
            />
          )}
        </button>
      </div>

      <Modal
        isOpen={isMenuOpen}
        onRequestClose={closeMenu}
        overlayClassName="fixed inset-0 bg-[#1D1E2173] z-60"
        className={`absolute top-0 right-0 w-1/2 tablet:w-1/3
           h-full bg-greenPrimary p-6 flex flex-col gap-4 z-60
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <NavigationLinks
          isHome={isHome}
          onLinkClick={closeMenu}
          isAuthenticated={isAuthenticated}
          onLogoutClick={handleLogoutClick}
          isInModal={isMenuOpen}
        />
      </Modal>

      <ConfirmLogoutModal
        isOpen={isLogoutModalOpen}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </header>
  );
}

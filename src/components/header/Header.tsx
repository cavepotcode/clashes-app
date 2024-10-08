import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import avatar from "../../assets/profile/avatar.jpg";
import { useEffect, useState } from "react";
import { HeaderLinks } from "./HeaderLinks";
import { UserLinks } from "./UserLinks";

interface HeaderProps {
  setBlur: (blur: boolean) => void;
  rightContentType: "navigation" | "userMenu";
}

export const Header = ({ setBlur, rightContentType }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setBlur(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setBlur(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setBlur]);

  const rightContent = () => {
    if (rightContentType === "navigation") {
      return (
        <div className="hidden justify-between px-10 md:flex w-3/5 font-semibold mr-10">
          <HeaderLinks />
        </div>
      );
    }

    if (rightContentType === "userMenu") {
      return (
        <div className="hidden md:flex items-center">
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center focus:outline-none"
            >
              <span className="mr-2 font-medium">ollita7@gmail.com</span>
              <img
                src={avatar}
                alt="Avatar"
                className="w-14 h-14 rounded-full mr-5 border-2 border-[#44ebe5]"
              />
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  const responsiveMenu = () => {
    if (rightContentType === "navigation") {
      return <HeaderLinks />;
    }

    if (rightContentType === "userMenu") {
      return <UserLinks />;
    }
    return null;
  };

  return (
    <header className="header backdrop-blur-md mx-auto items-center justify-between z-10 fixed mt-2 my-2 flex-wrap">
      <div className="logo">
        <a href={rightContentType === "userMenu" ? "/admin" : "/"}>
          <img src={logo} alt="Logo clashes" className="w-36 sm:w-52" />
        </a>
      </div>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        {rightContent()}
        {isUserMenuOpen && rightContentType === "userMenu" && (
          <div className="absolute basis-full divide-y-8 divide-transparent flex flex-wrap items-end flex-col mt-36 mr-10 z-[-1] p-4 rounded-xl bg-white shadow-lg ring-1 ring-[#44ebe5] focus:outline-none">
            <UserLinks />
          </div>
        )}
        <div className="md:hidden flex justify-end mr-2">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full font-semibold flex-col items-center justify-center bg-white py-4 w-full absolute top-full rounded-b-2xl divide-y-[20px] divide-transparent shadow-lg">
          {responsiveMenu()}
        </div>
      )}
    </header>
  );
};

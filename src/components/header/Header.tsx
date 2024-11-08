import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import avatar from "../../assets/profile/avatar.jpg";
import { useEffect, useRef, useState } from "react";
import { HeaderLinks } from "./HeaderLinks";
import { UserLinks } from "./UserLinks";
import { useAuthStore } from "../../hooks";
import { SidebarLinks } from "../sidebar/SidebarLinks";
import { TenantList } from "..";

interface HeaderProps {
  setBlur: (blur: boolean) => void;
  rightContentType: "navigation" | "userMenu";
}

export const Header = ({ setBlur, rightContentType }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuthStore();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div className="hidden md:flex items-center divide-x-[20px] divide-transparent">
          <TenantList />
          <div>
            <button
              onClick={toggleUserMenu}
              ref={avatarRef}
              className="flex items-center focus:outline-none"
            >
              <span className="mr-2 text-gray-500">
                {user ? user.email : ""}
              </span>
              <img
                src={avatar}
                alt="Avatar"
                className="w-14 z-10 h-14 rounded-full mr-5 border-2 border-[#44ebe5]"
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
      return (
        <>
          <TenantList />
          <UserLinks />
          <SidebarLinks linkColor="black" isBurgerMenu={true} />
        </>
      );
    }
    return null;
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header backdrop-blur-md mx-auto items-center justify-between z-10 fixed flex-wrap ${isScrolled ? "bg-transparent" : "bg-white"}`}
    >
      <div className="logo ml-6">
        <a href={rightContentType === "userMenu" ? "/admin" : "/"}>
          <img src={logo} alt="Logo clashes" className="w-36" />
        </a>
      </div>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        {rightContent()}
        {isUserMenuOpen && rightContentType === "userMenu" && (
          <div
            ref={userMenuRef}
            className="absolute basis-full divide-y-8 divide-transparent flex flex-wrap items-end flex-col mt-32 mr-10 p-4 rounded-xl bg-white shadow-lg ring-1 ring-[#44ebe5] focus:outline-none"
          >
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
        <div className="flex basis-full font-semibold flex-col items-center justify-center bg-white py-4 w-full absolute top-full rounded-b-2xl gap-8 shadow-lg">
          {responsiveMenu()}
        </div>
      )}
    </header>
  );
};

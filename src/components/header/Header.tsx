import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { HeaderLinks } from "./HeaderLinks";

export const Header = ({ setBlur }: { setBlur: (blur: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setBlur(!isOpen);
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

  return (
    <header className="header backdrop-blur-md mx-auto items-center justify-between mt-2 fixed z-10 my-2 flex-wrap">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo clashes" className="w-36 sm:w-52" />
        </a>
      </div>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        <div
          className="hidden justify-between px-10 md:flex w-3/5 font-semibold mr-10">
          <HeaderLinks/>
        </div>
        <div className="md:hidden flex justify-end mr-2">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full font-semibold flex-col items-center justify-center bg-white py-4 w-full absolute top-full rounded-b-2xl divide-y-[20px] divide-transparent shadow-lg">
          <HeaderLinks/>
        </div>
      )}
    </header>
  );
};

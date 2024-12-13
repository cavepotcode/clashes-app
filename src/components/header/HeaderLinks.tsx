import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

interface HeaderLinksProps {
  closeMenu?: () => void;
}

export const HeaderLinks = ({ closeMenu }: HeaderLinksProps) => {
  return (
    <>
      <Link
        to="queHacemos"
        smooth={true}
        duration={600}
        offset={-80}
        className="transition-all duration-300 hover:scale-110 hover:cursor-pointer"
        onClick={closeMenu}
      >
        Qué hacemos
      </Link>
      <Link
        to="testimonios"
        smooth={true}
        duration={800}
        offset={-80}
        className="transition-all duration-300 hover:scale-110 hover:cursor-pointer"
        onClick={closeMenu}
      >
        Testimonios
      </Link>
      <Link
        to="membresias"
        smooth={true}
        duration={1200}
        offset={-80}
        className="transition-all duration-300 hover:scale-110 hover:cursor-pointer"
        onClick={closeMenu}
      >
        Membresías
      </Link>
      <NavLink
        to="/login"
        className="transition-all duration-300 hover:scale-110"
        onClick={closeMenu}
      >
        Iniciar sesión
      </NavLink>
    </>
  );
};

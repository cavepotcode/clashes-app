import { FaTrophy, FaFileAlt, FaRegUserCircle } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { TbBrandCitymapper } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setSelectedPage } from "../../store";

interface SidebarLinksProps {
  linkColor: string;
  isBurgerMenu: boolean;
}

export const SidebarLinks = ({
  linkColor,
  isBurgerMenu,
}: SidebarLinksProps) => {
  const dispatch = useDispatch();
  const selectedPage = useSelector((state: RootState) => state.navigation.selectedPage);

  const handlePageSelect = (page: string) => {
    dispatch(setSelectedPage(page));
  };
  
  const getLinkClass = (page: string) => {
    const linkClass = isBurgerMenu
      ? "flex hover:font-semibold gap-2"
      : `flex items-center space-x-3 py-2 ${linkColor} hover:border-b-2 hover:border-${linkColor} w-full`;
    
    const activeClass = selectedPage === page ? `border-b-2 hover:border-${linkColor} w-full` : "";
    
    return `${linkClass} ${activeClass}`;
  };
  return (
    <nav
      className={`flex flex-col space-y-5 text-${linkColor} font-medium items-start md:text-lg`}
    >
      <a href="#" className={getLinkClass("tournaments")} onClick={() => handlePageSelect("tournaments")}>
        <FaTrophy fontSize="2em" />
        <span className={linkColor}>Torneos</span>
      </a>
      <a href="#" className={getLinkClass("stages")}>
        <TbBrandCitymapper fontSize="2em" />
        <span className={linkColor}>Etapas</span>
      </a>
      <a href="#" className={getLinkClass("ranking")}>
        <FaRankingStar fontSize="2em" />
        <span className={linkColor}>Ranking</span>
      </a>
      <a href="#" className={getLinkClass("settings")}>
        <IoSettingsSharp fontSize="2em" />
        <span className={linkColor}>Configuración</span>
      </a>
      <a href="#" className={getLinkClass("documentation")}>
        <FaFileAlt fontSize="2em" />
        <span className={linkColor}>Documentación</span>
      </a>
      <a href="#" className={getLinkClass("users")}>
        <FaRegUserCircle fontSize="2em" />
        <span className={linkColor}>Usuarios</span>
      </a>

      {isBurgerMenu && (
        <a
          href="#"
          className={`${getLinkClass("create")} border-2 border-[#1de7e0] p-1 rounded-md`}
        >
          <span className="text-[#1de7e0] font-semibold">Crear torneo</span>
        </a>
      )}
    </nav>
  );
};

import { FaTrophy, FaFileAlt, FaRegUserCircle } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { TbBrandCitymapper } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div className="w-2/5 bg-gradient-to-b from-[#1de7e0] px-6 py-16 mt-11">
      <nav className="flex flex-col space-y-5 text-white font-medium text-lg">
        <a href="#" className="flex items-center space-x-3 py-2 h-auto hover:border-b-2 hover:border-white">
          <FaTrophy color="white" fontSize="2em"/>
          <span>Torneos</span>
        </a>
        <a href="#" className="flex items-center space-x-3 py-2 hover:border-b-2 hover:border-white">
          <TbBrandCitymapper color="white" fontSize="2em"/>
          <span>Etapas</span>
        </a>
        <a href="#" className="flex items-center space-x-3 py-2 hover:border-b-2 hover:border-white">
          <FaRankingStar color="white" fontSize="2em"/>
          <span>Ranking</span>
        </a>
        <a href="#" className="flex items-center space-x-3 py-2 hover:border-b-2 hover:border-white">
          <IoSettingsSharp color="white" fontSize="2em"/>
          <span>Configuración</span>
        </a>
        <a href="#" className="flex items-center space-x-3 py-2 hover:border-b-2 hover:border-white">
          <FaFileAlt color="white" fontSize="2em"/>
          <span>Documentación</span>
        </a>
        <a href="#" className="flex items-center space-x-3 py-2 hover:border-b-2 hover:border-white">
          <FaRegUserCircle color="white" fontSize="2em"/>
          <span>Usuarios</span>
        </a>
      </nav>
      <div className="mt-auto">
        <button className="bg-white text-teal-500 font-bold py-2 px-4 rounded-full w-full mt-16 transition-all duration-300 hover:scale-110">
          Crear Torneo
        </button>
      </div>
    </div>
  );
};

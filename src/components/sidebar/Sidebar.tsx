import { SidebarLinks } from "./SidebarLinks";

export const Sidebar = () => {
  
  return (
    <div className="hidden md:block w-1/6 bg-black px-6 py-16 mt-11">
      <SidebarLinks linkColor="white" isBurgerMenu={false} />
      <div className="mt-auto">
        <button className="bg-[#37d7e3] text-black font-bold py-2 px-4 rounded-full w-full mt-16 transition-all duration-300 hover:scale-110">
          Crear Torneo
        </button>
      </div>
    </div>
  );
};

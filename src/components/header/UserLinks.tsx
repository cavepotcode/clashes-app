import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../hooks';


export const UserLinks = () => {
  const {startLogout} = useAuthStore();
  return (
    <div className='flex flex-col font-medium items-center divide-y-[15px] divide-transparent'>
        <NavLink to="#" className="hover:font-semibold opacity-50 pointer-events-none">Gestioná tu cuenta</NavLink>
        <NavLink onClick={startLogout} to="#" className="hover:font-semibold">Cerrar sesión</NavLink>
    </div>
  )
}
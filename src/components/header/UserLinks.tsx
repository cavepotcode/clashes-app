import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../hooks';


export const UserLinks = () => {
  const {startLogout} = useAuthStore();
  return (
    <>
        <NavLink to="#" className="hover:font-semibold">Gestioná tu cuenta</NavLink>
        <NavLink onClick={startLogout} to="#" className="hover:font-semibold">Cerrar sesión</NavLink>
        <NavLink to="#" className="hover:font-semibold">Tenants</NavLink>
    </>
  )
}
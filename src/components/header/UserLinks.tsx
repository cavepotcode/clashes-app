import { NavLink } from 'react-router-dom';

export const UserLinks = () => {
  return (
    <>
        <NavLink to="#" className="hover:font-semibold">Gestioná tu cuenta</NavLink>
        <NavLink to="#" className="hover:font-semibold">Cerrar sesión</NavLink>
        <NavLink to="#" className="hover:font-semibold">Tenants</NavLink>
    </>
  )
}
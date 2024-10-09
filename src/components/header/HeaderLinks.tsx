import { NavLink } from 'react-router-dom';

export const HeaderLinks = () => {
  return (
    <>
        <NavLink to="#" className="transition-all duration-300 hover:scale-110">Quiénes somos</NavLink>
        <NavLink to="#" className="transition-all duration-300 hover:scale-110">Qué hacemos</NavLink>
        <NavLink to="#" className="transition-all duration-300 hover:scale-110">Contacto</NavLink>
        <NavLink to="#" className="transition-all duration-300 hover:scale-110">Iniciar sesión</NavLink>
    </>
  )
}
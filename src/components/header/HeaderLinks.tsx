import { NavLink } from 'react-router-dom';

export const HeaderLinks = () => {
  return (
    <>
        <NavLink to="#">Quiénes somos</NavLink>
        <NavLink to="#">Qué hacemos</NavLink>
        <NavLink to="#">Contacto</NavLink>
        <NavLink to="#">Iniciar sesión</NavLink>
    </>
  )
}
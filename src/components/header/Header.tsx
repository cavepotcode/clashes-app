import "./Header.scss";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo clashes" />
        </a>
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <li>
            <a href="#">Quiénes somos</a>
          </li>
          <li>
            <a href="#">Qué hacemos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Iniciar sesión</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

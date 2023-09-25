import { NavLink } from 'react-router-dom';
import es from './../assets/img/spain.png';
import en from './../assets/img/united-kingdom.png';

export const Navbar = () => {
  return (
      <div className="navbar">
        <nav className="nav">
          <NavLink
            className={({ isActive }) => `${isActive ? 'active' : ''}`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `${isActive ? 'active' : ''}`}
            to="/explore"
          >
            Explore
          </NavLink>
          <NavLink
            className={({ isActive }) => `${isActive ? 'active' : ''}`}
            to="/profile"
          >
            Profile
          </NavLink>
        </nav>

        <div className="flags">
          <button
            // onClick={() => idioma.establecerLenguaje('es-MX')}
          >
            <img src={es} alt="Imagen bandera" />
          </button>
          <button 
            // onClick={() => idioma.establecerLenguaje('en-US')}
          >
            <img src={en} alt="Imagen bandera" />
          </button>
        </div>
      </div>
  )
}
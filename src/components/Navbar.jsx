import { NavLink } from 'react-router-dom';
import es from './../assets/img/mexico.png';
import en from './../assets/img/usa.png';
import { FormattedMessage } from 'react-intl';

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <NavLink
          className={({ isActive }) => `${isActive ? 'active' : ''}`}
          to="/"
        >
          <FormattedMessage
            id='Navbar.home'
            defaultMessage='Home'
          />
        </NavLink>
        <NavLink
          className={({ isActive }) => `${isActive ? 'active' : ''}`}
          to="/explore"
        >
          <FormattedMessage
            id='Navbar.explore'
            defaultMessage='Explore'
          />
        </NavLink>
        <NavLink
          className={({ isActive }) => `${isActive ? 'active' : ''}`}
          to="/profile"
        >
          <FormattedMessage
            id='Navbar.profile'
            defaultMessage='Profile'
          />
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
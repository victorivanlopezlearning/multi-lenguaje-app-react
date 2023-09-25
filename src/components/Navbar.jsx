import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { LangContext } from '../context';
import es from './../assets/img/mexico.png';
import en from './../assets/img/usa.png';

export const Navbar = () => {

  const { onChangeLocale } = useContext(LangContext);

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
          type='button'
          onClick={() => onChangeLocale('es-MX')}
        >
          <img src={es} alt="Imagen bandera" />
        </button>
        <button
        type='button'
        onClick={() => onChangeLocale('en-US')}
        >
          <img src={en} alt="Imagen bandera" />
        </button>
      </div>
    </div>
  )
}
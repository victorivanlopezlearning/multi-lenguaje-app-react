import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { LangContext } from '../context';

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
          <img 
            src='./assets/img/mexico.png'
            alt="Imagen bandera de México" />
        </button>
        <button
        type='button'
        onClick={() => onChangeLocale('en-US')}
        >
          <img 
            src='./assets/img/usa.png' 
            alt="Imagen bandera de USA"
          />
        </button>
      </div>
    </div>
  )
}
import React from 'react';
import classes from './NavBar.module.css';

// import logos
import homeLogo from '../../assets/icons/smart-home-svgrepo-com.svg';

const NavBar = () => {
  return (
    <header className={classes.navigation}>
      {/* <img className={classes.logo} src={homeLogo} alt='logo' /> */}
      <p>REACT BOARDS</p>
      <nav className={classes.nav__links}>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Boards</a>
          </li>
          <li>
            <a href='#'>Profile</a>
          </li>
          <li>
            <a href='#'>Settings</a>
          </li>
        </ul>
      </nav>
      <button class={classes.cta} href='#'>
        Login
      </button>
    </header>
  );
};

export default NavBar;

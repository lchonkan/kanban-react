import React from 'react';
import classes from './NavBar.module.css';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className={classes.navigation}>
      {/* <img className={classes.logo} src={homeLogo} alt='logo' /> */}
      {/* <p>REACT SHOWCASE</p> */}
      <nav className={classes.nav__links}>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='#'>Projects</Link>
          </li>
          <li>
            <Link to='#'>Data Exchanges</Link>
          </li>
          <li>
            <Link to='#'>Viewer</Link>
          </li>
          {/* <li>
            <Link to='/board'>Active</Link>
          </li> */}
          {/* <li>
            <Link to='/boards'>Boards</Link>
          </li> */}
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          {/* <li>
            <Link to='/settings'>Settings</Link>
          </li> */}
        </ul>
      </nav>
      <div>
        {/* <button className={classes.cta}>
          <Link to='/login'>Login</Link>
        </button> */}
        <button className={classes.cta}>
          <Link to='/api/forge/auth'>Forge Auth</Link>
        </button>
      </div>
    </header>
  );
};

export default NavBar;

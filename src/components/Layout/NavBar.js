import React, { useContext } from 'react';
import classes from './NavBar.module.css';

import { Link } from 'react-router-dom';

import ForgeAuthStatusBtn from '../UI/Buttons/ForgeAuthStatusBtn';

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
            <Link to='/forge/viewer'>Viewer</Link>
          </li>
          <li>
            <Link to='/board'>Board</Link>
          </li>
          {/* <li>
            <Link to='/boards'>Boards</Link>
          </li> */}
          <li>
            <Link to='/profile'>Data Management API</Link>
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

        <ForgeAuthStatusBtn>
          <Link to='/api/forge/auth'>Auth </Link>
        </ForgeAuthStatusBtn>
      </div>
    </header>
  );
};

export default NavBar;

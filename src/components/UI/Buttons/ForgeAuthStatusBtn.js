import React from 'react';

import './ForgeAuthStatusBtn.css';

import { useSelector } from 'react-redux';

const ForgeAuthStatusBtn = (props) => {
  //USing Redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <span className='forgeBtn'>
        <span className={`forgeBtn-status__${isLoggedIn ? 'ok' : 'fail'}`}></span>

        {props.children}
      </span>
    </>
  );
};

export default ForgeAuthStatusBtn;

import React from 'react';
import classes from './LoginForm.module.css';

const LoginForm = (props) => {
  return (
    <div className={classes.loginform}>
      <div className={classes.background}>
        {/* <div className={classes.shape}></div>
        <div className={classes.shape}></div> */}
      </div>
      <form>
        <h3>Login</h3>
        <label htmlfor='username'>Username</label>
        <input type='text' placeholder='Email or Phone' id='username' />
        <label htmlfor='password'>Password</label>
        <input type='password' placeholder='Password' id='password' />
        <br />

        <button>Login</button>
        {/* <div className={classes.social}>
          <div className={classes.go}>
            <i className={classes['fab fa-google']}></i> Google
          </div>
          <div className={classes.fb}>
            <i class='fab fa-facebook'></i> Facebook
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default LoginForm;

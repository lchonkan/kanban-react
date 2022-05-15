import React, { useEffect, useState, useContext, useCallback } from 'react';

import { AuthContext } from '../../context/auth-provider';

import { useSearchParams } from 'react-router-dom';

// using the slice from the store to get the current lists.
import { useSelector, useDispatch } from 'react-redux';

import Sucess from './Sucess';

import { authActions } from '../../store/auth.slice';

const AuthPage = () => {
  const authCtx = useContext(AuthContext);

  //USing Redux
  const authCredentials = useSelector((state) => state.auth.credentials);
  const access_token = authCredentials.access_token;
  const dispatch = useDispatch();

  const [url, setUrl] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  let authorizationCode = null;
  authorizationCode = searchParams.get('code');

  const getUrl = useCallback(async () => {
    await fetch('http://localhost:8000/api/auth/geturl', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        const url = data.authUrl;
        console.log('Authorization URL', url);
        setUrl(url);
        authCtx.url = url;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onLoginHandler = (credentials) => {
    dispatch(authActions.setCredentials(credentials));
    dispatch(authActions.login());
  };

  const getToken3Legged = async (authorizationCode) => {
    console.log('Getting Token... with code.. ', authorizationCode);

    const data = { authorizationCode: authorizationCode };

    await fetch('http://localhost:8000/api/auth/getToken3Legged', {
      method: 'POST',
      // mode: 'no-cors', //!important to check  the security before deployment
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        authCtx.credentials = data;
        onLoginHandler(data);
        console.log('leo');
      })

      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    //TODO Send a requesto to our backend with our code to get an access token
    if (authorizationCode) {
      getToken3Legged(authorizationCode);
    } else {
      getUrl();
      console.log('Please authorize the app to get a code');
    }
  }, [authorizationCode]);

  return (
    <div>
      <h2>Authorization Page</h2>
      <br />
      {access_token && <Sucess />}
      <br />
      {/* {url && <p>{url}</p>} */}

      <br />
      {url && !access_token && <a href={url}>Get Access Token</a>}
    </div>
  );
};

export default AuthPage;
